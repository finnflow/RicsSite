// ---------------------------------------------------------------------------
// Types – Chat
// ---------------------------------------------------------------------------

export interface ChatRequest {
  message: string
  guestId: string
  conversationId?: string | null
}

export interface ImageChatRequest {
  message: string
  guestId: string
  conversationId?: string | null
  image: File
}

export interface ChatSource {
  path: string
  snippet?: string
  // Backend kann zusätzliche Felder anhängen
  [key: string]: unknown
}

export interface ChatResponse {
  answer: string
  conversationId: string
  sources?: ChatSource[]
}

// ---------------------------------------------------------------------------
// Types – Conversations & Messages
// ---------------------------------------------------------------------------

export interface ConversationApiItem {
  id: string
  title?: string | null
  created_at?: string | null
  updated_at?: string | null
  guest_id?: string | null
}

export interface ConversationsResponse {
  conversations: ConversationApiItem[]
}

export type MessageRole = 'user' | 'assistant'

export interface ConversationMessage {
  id: string
  conversation_id: string
  role: MessageRole
  content: string
  created_at: string
  image_path?: string | null
}

export interface ConversationMessagesResponse {
  messages: ConversationMessage[]
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function getBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  if (!baseUrl) {
    throw new Error('VITE_API_BASE_URL is not set')
  }
  return baseUrl
}

async function handleJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(
      `Kursbot API request failed with ${response.status}: ${text || response.statusText}`,
    )
  }

  const data = (await response.json()) as T
  return data
}

// ---------------------------------------------------------------------------
// Chat – send user message to backend
// ---------------------------------------------------------------------------

export async function sendChatMessage(payload: ChatRequest): Promise<ChatResponse> {
  const baseUrl = getBaseUrl()

  const response = await fetch(`${baseUrl}/api/v1/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return handleJsonResponse<ChatResponse>(response)
}

// Send a message with an optional image attachment via multipart/form-data
export async function sendImageMessage(payload: ImageChatRequest): Promise<ChatResponse> {
  const baseUrl = getBaseUrl()

  const form = new FormData()
  form.append('message', payload.message)
  form.append('guestId', payload.guestId)
  if (payload.conversationId) {
    form.append('conversationId', payload.conversationId)
  }
  form.append('image', payload.image)

  const response = await fetch(`${baseUrl}/api/v1/chat/image`, {
    method: 'POST',
    // No Content-Type header — browser sets it automatically including the multipart boundary
    body: form,
  })

  return handleJsonResponse<ChatResponse>(response)
}

// Resolve a backend image path to an absolute URL for display
export function resolveImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath
  return `${getBaseUrl()}${imagePath}`
}

// ---------------------------------------------------------------------------
// Conversations – list, messages, delete
// ---------------------------------------------------------------------------

export async function fetchConversations(guestId: string): Promise<ConversationsResponse> {
  const baseUrl = getBaseUrl()
  const url = new URL('/api/v1/conversations', baseUrl)
  url.searchParams.set('guest_id', guestId)

  const response = await fetch(url.toString(), {
    method: 'GET',
  })

  return handleJsonResponse<ConversationsResponse>(response)
}

export async function fetchConversationMessages(
  conversationId: string,
  guestId: string,
): Promise<ConversationMessagesResponse> {
  const baseUrl = getBaseUrl()
  const url = new URL(`/api/v1/conversations/${conversationId}/messages`, baseUrl)
  url.searchParams.set('guest_id', guestId)

  const response = await fetch(url.toString(), {
    method: 'GET',
  })

  return handleJsonResponse<ConversationMessagesResponse>(response)
}

export async function deleteConversation(conversationId: string, guestId: string): Promise<void> {
  const baseUrl = getBaseUrl()
  const url = new URL(`/api/v1/conversations/${conversationId}`, baseUrl)
  url.searchParams.set('guest_id', guestId)

  const response = await fetch(url.toString(), {
    method: 'DELETE',
  })

  // Response-Body ist aktuell uninteressant, wir prüfen nur auf Fehler.
  await handleJsonResponse<{ status: string }>(response)
}
