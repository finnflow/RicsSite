import { Header } from '@/app/components/Header'
import { Send, Plus, MoreVertical } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  sendChatMessage,
  fetchConversations,
  fetchConversationMessages,
  type ConversationApiItem,
} from '@/lib/api/kursbotClient'

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const GUEST_ID_KEY = 'lebensessenz_guest_id'

function getOrCreateGuestId(): string {
  const existing = localStorage.getItem(GUEST_ID_KEY)
  if (existing) return existing

  const newId = crypto.randomUUID()
  localStorage.setItem(GUEST_ID_KEY, newId)
  return newId
}

export default function Kursbot() {
  const navigate = useNavigate()

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

  // guestId einmalig beim Mount initialisieren
  useEffect(() => {
    setGuestId(getOrCreateGuestId())
  }, [])

  // Conversations laden, sobald guestId verfügbar ist
  useEffect(() => {
    if (!guestId) return

    let cancelled = false

    setIsLoadingConversations(true)
    setConversationsError(null)

    fetchConversations(guestId)
      .then((res) => {
        if (cancelled) return
        setConversations(res.conversations ?? [])
      })
      .catch((err: unknown) => {
        if (cancelled) return
        console.error('[Kursbot] fetchConversations error:', err)
        setConversationsError('Die bisherigen Gespräche konnten nicht geladen werden.')
      })
      .finally(() => {
        if (cancelled) return
        setIsLoadingConversations(false)
      })

    return () => {
      cancelled = true
    }
  }, [guestId])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || !guestId || isLoading) return

    // Optimistisch: User-Nachricht sofort anzeigen
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    const currentInput = inputValue
    setInputValue('')
    setIsLoading(true)
    setError(null)

    sendChatMessage({
      message: currentInput,
      guestId,
      conversationId,
    })
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

    fetchConversationMessages(id, guestId)
      .then((res) => {
        // Messages nach created_at sortieren (älteste zuerst)
        const sorted = [...(res.messages ?? [])].sort((a, b) => {
          const da = new Date(a.created_at).getTime()
          const db = new Date(b.created_at).getTime()
          return da - db
        })

        const mapped: Message[] = sorted.map((m) => ({
          id: m.id,
          content: m.content,
          isBot: m.role === 'assistant',
          timestamp: new Date(m.created_at),
        }))

        setMessages(mapped)
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
  }

  const isConversationSelected = (id: string | undefined) =>
    !!conversationId && id === conversationId

  return (
    <div className="min-h-screen bg-[#F7F3EF] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8 lg:flex lg:gap-8">
          {/* Sidebar – Chat History (Desktop only) */}
          <aside className="hidden lg:flex lg:w-72 lg:flex-col border border-[#E2D4C8] rounded-3xl bg-white/80 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#3A2A21]">Lebensessenzen</h2>
              <button
                type="button"
                className="p-1 rounded-full hover:bg-[#F6E8DE] text-[#8A6B54]"
                aria-label="Weitere Optionen"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleNewChat}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-2xl bg-[#D4A88C] text-white text-sm font-medium hover:bg-[#C9997A] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Neuer Chat</span>
            </button>

            <div className="mt-4 flex-1 overflow-y-auto space-y-1">
              {isLoadingConversations && (
                <p className="text-sm text-gray-500">Lade frühere Gespräche…</p>
              )}

              {conversationsError && <p className="text-sm text-red-600">{conversationsError}</p>}

              {!isLoadingConversations && !conversationsError && conversations.length === 0 && (
                <p className="text-sm text-gray-500">Noch keine Gespräche vorhanden.</p>
              )}

              {conversations.map((conv) => {
                const dateStr = conv.updated_at ?? conv.created_at
                let timestamp = ''

                if (dateStr) {
                  const d = new Date(dateStr)
                  if (!Number.isNaN(d.getTime())) {
                    timestamp = d.toLocaleString('de-DE', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    })
                  }
                }

                const selected = isConversationSelected(conv.id)

                return (
                  <button
                    key={conv.id}
                    type="button"
                    onClick={() => handleSelectConversation(conv)}
                    className={`w-full text-left px-3 py-2 rounded-2xl hover:bg-[#F6E8DE] ${
                      selected ? 'bg-[#F6E8DE]' : ''
                    }`}
                  >
                    <p className="text-sm font-medium text-[#3A2A21] truncate">
                      {conv.title || 'Gespräch'}
                    </p>
                    {timestamp && <p className="text-xs text-gray-500">{timestamp}</p>}
                  </button>
                )
              })}
            </div>

            <p className="mt-4 text-[11px] text-gray-400 text-center">
              © Lebensessenzen | Ricarda Ludwig
            </p>
          </aside>

          {/* Main Chat Area */}
          <section className="flex-1 mt-6 lg:mt-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-[#3A2A21]">Kursbot</h1>
                <p className="text-sm text-gray-600">Stelle deine Fragen zum Kursmaterial</p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/kundenbereich')}
                className="text-sm text-[#D4A88C] hover:text-[#C9997A] transition-colors"
              >
                Zurück zum Kundenbereich
              </button>
            </div>

            <div className="bg-white/80 rounded-3xl border border-[#E2D4C8] p-4 flex flex-col h-[60vh]">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto space-y-3">
                {messagesError && <p className="text-sm text-red-600">{messagesError}</p>}

                {messages.length === 0 && !isLoadingMessages ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 px-8">
                    <h2 className="text-lg font-medium mb-2">Starte eine Konversation</h2>
                    <p className="text-sm">
                      Stelle eine Frage zum Kursmaterial und ich helfe dir gerne weiter.
                    </p>
                  </div>
                ) : (
                  <>
                    {isLoadingMessages && (
                      <div className="text-xs text-gray-500 mb-2">Gespräch wird geladen…</div>
                    )}
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          message.isBot
                            ? 'bg-[#F6E8DE] text-[#3A2A21] self-start'
                            : 'bg-[#D4A88C] text-white self-end ml-auto'
                        }`}
                      >
                        {message.content}
                      </div>
                    ))}
                    {isLoading && <div className="mt-2 text-xs text-gray-500">Bot denkt…</div>}
                  </>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="mt-4">
                <div className="flex items-end gap-3">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Stelle eine Frage..."
                      rows={1}
                      disabled={isLoading}
                      className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A88C] focus:border-transparent resize-none disabled:opacity-60"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage(e)
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="w-12 h-12 bg-[#D4A88C] hover:bg-[#C9997A] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {error && <p className="text-sm text-red-600 mt-3 text-center">{error}</p>}
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
