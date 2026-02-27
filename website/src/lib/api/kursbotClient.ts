// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ChatRequest {
  message: string
  guestId: string
  conversationId?: string | null
}

export interface ChatSource {
  path: string
  snippet?: string
  [key: string]: unknown
}

export interface ChatResponse {
  answer: string
  conversationId: string
  sources?: ChatSource[]
}

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

export async function sendChatMessage(payload: ChatRequest): Promise<ChatResponse> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  if (!baseUrl) {
    throw new Error('VITE_API_BASE_URL is not set')
  }

  const response = await fetch(`${baseUrl}/api/v1/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(
      `Chat API request failed with ${response.status}: ${text || response.statusText}`,
    )
  }

  const data = (await response.json()) as ChatResponse
  return data
}
