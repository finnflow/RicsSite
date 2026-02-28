import { Header } from '@/app/components/Header'
import { Send, Plus, Trash2, Menu, X, MessageCircle, Paperclip } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  sendChatMessage,
  sendImageMessage,
  resolveImageUrl,
  fetchConversations,
  fetchConversationMessages,
  deleteConversation,
  type ConversationApiItem,
} from '@/lib/api/kursbotClient'

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
  imageUrl?: string | null
}

const GUEST_ID_KEY = 'lebensessenz_guest_id'

function getOrCreateGuestId(): string {
  const existing = localStorage.getItem(GUEST_ID_KEY)
  if (existing) return existing
  const newId = crypto.randomUUID()
  localStorage.setItem(GUEST_ID_KEY, newId)
  return newId
}

// Renders basic markdown (bold + preserved line breaks) without dangerouslySetInnerHTML
function BotMessageContent({ content }: { content: string }) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g)
  return (
    <p className="text-sm leading-relaxed text-[#3A2A21] whitespace-pre-wrap">
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}

// Animated typing indicator while waiting for bot response
function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-[#F6E8DE] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1.5 items-center">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-[#C9997A] animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Message bubble — renders text and/or image thumbnail
function MessageBubble({ message }: { message: Message }) {
  const hasImage = Boolean(message.imageUrl)
  const hasText = Boolean(message.content)
  const imageOnly = hasImage && !hasText

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[75%] rounded-2xl shadow-sm ${
          message.isBot ? 'rounded-tl-sm bg-[#F6E8DE]' : 'rounded-tr-sm bg-[#D4A88C] text-white'
        } ${imageOnly ? 'p-1.5' : 'px-4 py-3'}`}
      >
        {hasImage && (
          <img
            src={message.imageUrl!}
            alt=""
            className={`max-h-40 w-auto max-w-full object-contain block border border-black/10 ${
              imageOnly ? 'rounded-xl' : 'rounded-lg mb-2'
            }`}
          />
        )}
        {hasText &&
          (message.isBot ? (
            <BotMessageContent content={message.content} />
          ) : (
            <p className="text-sm leading-relaxed">{message.content}</p>
          ))}
      </div>
    </div>
  )
}

export default function Kursbot() {
  const navigate = useNavigate()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [guestId, setGuestId] = useState<string | null>(null)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [conversations, setConversations] = useState<ConversationApiItem[]>([])
  const [isLoadingConversations, setIsLoadingConversations] = useState(false)
  const [conversationsError, setConversationsError] = useState<string | null>(null)

  const [isLoadingMessages, setIsLoadingMessages] = useState(false)
  const [messagesError, setMessagesError] = useState<string | null>(null)

  const [deletingConversationId, setDeletingConversationId] = useState<string | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Attached image state: the File and a local object URL for preview/bubble display
  const [attachedImage, setAttachedImage] = useState<File | null>(null)
  const [attachedPreviewUrl, setAttachedPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    setGuestId(getOrCreateGuestId())
  }, [])

  useEffect(() => {
    if (!guestId) return
    let cancelled = false
    setIsLoadingConversations(true)
    setConversationsError(null)
    fetchConversations(guestId)
      .then((res) => {
        if (!cancelled) setConversations(res.conversations ?? [])
      })
      .catch((err: unknown) => {
        if (cancelled) return
        console.error('[Kursbot] fetchConversations error:', err)
        setConversationsError('Die bisherigen Gespräche konnten nicht geladen werden.')
      })
      .finally(() => {
        if (!cancelled) setIsLoadingConversations(false)
      })
    return () => {
      cancelled = true
    }
  }, [guestId])

  // Scroll to latest message whenever messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    // Revoke previous preview URL before creating a new one
    if (attachedPreviewUrl) URL.revokeObjectURL(attachedPreviewUrl)
    setAttachedImage(file)
    setAttachedPreviewUrl(URL.createObjectURL(file))
    // Reset input so the same file can be reselected if needed
    e.target.value = ''
  }

  const handleRemoveAttachment = () => {
    if (attachedPreviewUrl) URL.revokeObjectURL(attachedPreviewUrl)
    setAttachedImage(null)
    setAttachedPreviewUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const hasText = inputValue.trim().length > 0
    const hasImage = attachedImage !== null
    if ((!hasText && !hasImage) || !guestId || isLoading) return

    const isNewConversation = !conversationId

    // Capture before clearing — the preview URL is passed into the message bubble
    const currentInput = inputValue
    const currentImage = attachedImage
    const currentPreviewUrl = attachedPreviewUrl

    const userMessage: Message = {
      id: Date.now().toString(),
      content: currentInput,
      isBot: false,
      timestamp: new Date(),
      // Object URL stays valid for the session; we don't revoke it so the bubble keeps showing
      imageUrl: currentPreviewUrl,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    // Clear attachment state without revoking — the URL lives on in the message bubble
    setAttachedImage(null)
    setAttachedPreviewUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
    setIsLoading(true)
    setError(null)

    const sendPromise = currentImage
      ? sendImageMessage({ message: currentInput, guestId, conversationId, image: currentImage })
      : sendChatMessage({ message: currentInput, guestId, conversationId })

    sendPromise
      .then((response) => {
        setConversationId(response.conversationId)
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: response.answer,
            isBot: true,
            timestamp: new Date(),
          },
        ])
        // Refresh sidebar when a new conversation was just created
        if (isNewConversation) {
          fetchConversations(guestId)
            .then((res) => setConversations(res.conversations ?? []))
            .catch((err: unknown) => console.error('[Kursbot] fetchConversations error:', err))
        }
      })
      .catch((err: unknown) => {
        console.error('[Kursbot] API error:', err)
        setError('Da ist etwas schiefgelaufen. Bitte versuch es später noch einmal.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSelectConversation = (conversation: ConversationApiItem) => {
    if (!guestId) return
    const id = conversation.id
    if (!id) return
    setConversationId(id)
    setIsLoadingMessages(true)
    setMessagesError(null)
    setError(null)
    setIsSidebarOpen(false)
    fetchConversationMessages(id, guestId)
      .then((res) => {
        const sorted = [...(res.messages ?? [])].sort(
          (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        )
        setMessages(
          sorted.map((m) => ({
            id: m.id,
            content: m.content,
            isBot: m.role === 'assistant',
            timestamp: new Date(m.created_at),
            imageUrl: m.image_path ? resolveImageUrl(m.image_path) : null,
          })),
        )
      })
      .catch((err: unknown) => {
        console.error('[Kursbot] fetchConversationMessages error:', err)
        setMessagesError(
          'Dieses Gespräch konnte nicht geladen werden. Bitte versuch es später erneut.',
        )
      })
      .finally(() => {
        setIsLoadingMessages(false)
      })
  }

  const handleNewChat = () => {
    setConversationId(null)
    setMessages([])
    setMessagesError(null)
    setError(null)
    setIsSidebarOpen(false)
    // Clear any pending attachment
    if (attachedPreviewUrl) URL.revokeObjectURL(attachedPreviewUrl)
    setAttachedImage(null)
    setAttachedPreviewUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDeleteConversation = (id: string) => {
    if (!guestId) return
    const confirmed = window.confirm(
      'Möchtest du dieses Gespräch wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
    )
    if (!confirmed) return
    setDeletingConversationId(id)
    setDeleteError(null)
    deleteConversation(id, guestId)
      .then(() => {
        setConversations((prev) => prev.filter((c) => c.id !== id))
        if (conversationId === id) {
          setConversationId(null)
          setMessages([])
          setMessagesError(null)
          setError(null)
        }
      })
      .catch((err: unknown) => {
        console.error('[Kursbot] deleteConversation error:', err)
        setDeleteError('Das Gespräch konnte nicht gelöscht werden. Bitte versuch es später erneut.')
      })
      .finally(() => {
        setDeletingConversationId(null)
      })
  }

  const isConversationSelected = (id: string | undefined) =>
    !!conversationId && id === conversationId

  // Conversation list — shared between desktop sidebar and mobile drawer
  const conversationList = (
    <div className="flex-1 min-h-0 overflow-y-auto space-y-0.5">
      {isLoadingConversations && (
        <p className="text-xs text-[#8A6B54]/60 px-2 py-1">Lade Gespräche…</p>
      )}
      {conversationsError && <p className="text-xs text-red-500 px-2">{conversationsError}</p>}
      {!isLoadingConversations && !conversationsError && conversations.length === 0 && (
        <p className="text-xs text-[#8A6B54]/60 px-2 py-1">Noch keine Gespräche vorhanden.</p>
      )}
      {conversations.map((conv) => {
        const dateStr = conv.updated_at ?? conv.created_at
        let timestamp = ''
        if (dateStr) {
          const d = new Date(dateStr)
          if (!Number.isNaN(d.getTime())) {
            timestamp = d.toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' })
          }
        }
        const selected = isConversationSelected(conv.id)
        const isDeleting = deletingConversationId === conv.id

        return (
          <div
            key={conv.id}
            className={`group flex items-center w-full rounded-lg border-l-2 transition-colors ${
              selected ? 'bg-[#F0E0D0] border-[#D4A88C]' : 'border-transparent hover:bg-[#F6EDE5]'
            }`}
          >
            <button
              type="button"
              onClick={() => handleSelectConversation(conv)}
              className="flex-1 min-w-0 text-left px-3 py-2"
            >
              <p
                className={`text-sm truncate leading-tight ${
                  selected ? 'font-medium text-[#3A2A21]' : 'text-[#3A2A21]'
                }`}
              >
                {conv.title || 'Gespräch'}
              </p>
              {timestamp && <p className="text-[11px] text-[#8A6B54]/60 mt-0.5">{timestamp}</p>}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteConversation(conv.id)
              }}
              disabled={isDeleting}
              className="opacity-0 group-hover:opacity-100 p-1.5 mr-1.5 rounded-md hover:bg-[#EDD5C4] text-[#8A6B54] disabled:opacity-30 transition-opacity flex-shrink-0"
              aria-label="Gespräch löschen"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="h-screen bg-[#F7F3EF] flex flex-col overflow-hidden">
      <Header />
      {/* Spacer that matches the fixed header height */}
      <div className="h-20 flex-shrink-0" />

      <main className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div className="h-full max-w-6xl w-full mx-auto px-4 pt-4 pb-6 flex gap-5">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex w-64 flex-col bg-white/70 rounded-2xl border border-[#E2D4C8] shadow-sm p-4 gap-4">
            <h2 className="text-xs font-semibold text-[#8A6B54] tracking-widest uppercase">
              Verlauf
            </h2>
            <button
              type="button"
              onClick={handleNewChat}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#D4A88C] text-white text-sm font-medium hover:bg-[#C9997A] active:scale-[0.98] transition-all"
            >
              <Plus className="w-4 h-4" />
              Neuer Chat
            </button>
            {conversationList}
            {deleteError && <p className="text-[11px] text-red-500">{deleteError}</p>}
            <p className="text-[11px] text-[#8A6B54]/50 pt-3 border-t border-[#EDE0D4]">
              © Lebensessenzen | Ricarda Ludwig
            </p>
          </aside>

          {/* Mobile Drawer */}
          {isSidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-[2px]"
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden="true"
              />
              <div className="fixed top-20 left-0 bottom-0 w-64 flex flex-col bg-white/95 border-r border-[#E2D4C8] z-50 shadow-2xl lg:hidden p-4 gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-semibold text-[#8A6B54] tracking-widest uppercase">
                    Verlauf
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-[#F6E8DE] text-[#8A6B54] transition-colors"
                    aria-label="Verlauf schließen"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleNewChat}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#D4A88C] text-white text-sm font-medium hover:bg-[#C9997A] active:scale-[0.98] transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Neuer Chat
                </button>
                {conversationList}
                <p className="text-[11px] text-[#8A6B54]/50 pt-3 border-t border-[#EDE0D4]">
                  © Lebensessenzen | Ricarda Ludwig
                </p>
              </div>
            </>
          )}

          {/* Main Chat Area */}
          <section className="flex-1 min-h-0 flex flex-col gap-3">
            {/* Chat Header */}
            <div className="flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-xl hover:bg-[#F0E0D0] text-[#8A6B54] transition-colors"
                  aria-label="Verlauf öffnen"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-xl font-semibold text-[#3A2A21] leading-tight">Kursbot</h1>
                  <p className="text-xs text-[#8A6B54]">Stelle deine Fragen zum Kursmaterial</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/kundenbereich')}
                className="text-sm text-[#C9997A] hover:text-[#B8836A] transition-colors"
              >
                ← Kundenbereich
              </button>
            </div>

            {/* Chat Container */}
            <div className="flex-1 min-h-0 bg-white/80 rounded-2xl border border-[#E2D4C8] shadow-sm flex flex-col overflow-hidden">
              {/* Messages */}
              <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-4">
                {messagesError && (
                  <p className="text-xs text-red-500 text-center py-2">{messagesError}</p>
                )}

                {messages.length === 0 && !isLoadingMessages ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-8 gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#F6E8DE] flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#D4A88C]" />
                    </div>
                    <div>
                      <h2 className="text-base font-medium text-[#3A2A21] mb-1">
                        Wie kann ich helfen?
                      </h2>
                      <p className="text-sm text-[#8A6B54]">
                        Stelle eine Frage zum Kursmaterial — ich bin für dich da.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {isLoadingMessages && (
                      <p className="text-xs text-[#8A6B54]/70 text-center py-2">
                        Gespräch wird geladen…
                      </p>
                    )}
                    {messages.map((message) => (
                      <MessageBubble key={message.id} message={message} />
                    ))}
                    {isLoading && <TypingIndicator />}
                  </>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-[#EDE0D4] p-4 flex-shrink-0">
                <form onSubmit={handleSendMessage}>
                  <div className="bg-[#F7F3EF] rounded-xl border border-[#E2D4C8] focus-within:border-[#D4A88C] focus-within:ring-2 focus-within:ring-[#D4A88C]/20 transition-all">
                    {/* Image preview strip — shown when a file is attached */}
                    {attachedPreviewUrl && (
                      <div className="px-4 pt-3 pb-1">
                        <div className="relative inline-block">
                          <img
                            src={attachedPreviewUrl}
                            alt="Anhang"
                            className="h-16 w-auto max-w-[120px] rounded-lg object-cover border border-[#E2D4C8]"
                          />
                          <button
                            type="button"
                            onClick={handleRemoveAttachment}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#3A2A21]/80 hover:bg-[#3A2A21] text-white rounded-full flex items-center justify-center transition-colors"
                            aria-label="Anhang entfernen"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Input row */}
                    <div className="flex items-end gap-2 px-4 py-2">
                      <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Stelle eine Frage…"
                        rows={1}
                        disabled={isLoading}
                        className="flex-1 bg-transparent text-sm text-[#3A2A21] placeholder:text-[#8A6B54]/50 focus:outline-none resize-none disabled:opacity-60 py-1.5"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage(e)
                          }
                        }}
                      />
                      <div className="flex items-center gap-1.5 flex-shrink-0 pb-0.5">
                        {/* Hidden file input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          aria-label="Bild auswählen"
                        />
                        {/* Attach button */}
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isLoading}
                          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors disabled:opacity-40 ${
                            attachedImage
                              ? 'text-[#D4A88C] bg-[#F0E0D0]'
                              : 'text-[#8A6B54]/60 hover:text-[#8A6B54] hover:bg-[#F0E0D0]'
                          }`}
                          aria-label="Bild anhängen"
                        >
                          <Paperclip className="w-4 h-4" />
                        </button>
                        {/* Send button */}
                        <button
                          type="submit"
                          disabled={(!inputValue.trim() && !attachedImage) || isLoading}
                          className="w-9 h-9 bg-[#D4A88C] hover:bg-[#C9997A] text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-xs text-red-500 mt-2 text-center">{error}</p>}
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
