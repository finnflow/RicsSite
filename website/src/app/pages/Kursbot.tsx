import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Send, Plus, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatHistory {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
}

export default function Kursbot() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Demo chat history
  const chatHistory: ChatHistory[] = [
    { id: "1", title: "Was kann ich gut mit Linsen kom...", preview: "Vor 1d", timestamp: "Vor 1d" },
    { id: "2", title: "Ich will morgen gegen 9:00 train...", preview: "Vor 1d", timestamp: "Vor 1d" },
    { id: "3", title: "Gib mir ein Gericht, auf dem Tre...", preview: "Vor 1d", timestamp: "Vor 1d" },
    { id: "4", title: "wie gehts?", preview: "Vor 1d", timestamp: "Vor 1d" },
    { id: "5", title: "und gib mir noch einmal die Erkl...", preview: "Vor 1d", timestamp: "Vor 1d" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Danke für deine Frage! Ich bin ein Demo-Bot und kann dir bei Fragen zum Kursmaterial helfen. In der echten Version würde ich detaillierte Antworten basierend auf den Kursinhalten geben.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="pt-20 flex-1 flex">
        <div className="flex w-full max-w-[1800px] mx-auto">
          {/* Sidebar - Chat History (Desktop only) */}
          <aside className={`hidden lg:flex w-64 border-r border-gray-200 bg-[#FBF8F3] flex-col ${isSidebarOpen ? '' : 'hidden'}`}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Lebensessenzen</h2>
                <button className="text-gray-600 hover:text-gray-900">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <button className="w-full bg-[#C9B5A0] hover:bg-[#B8A490] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Neuer Chat</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3">
              <div className="space-y-2">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    className="p-3 rounded-xl hover:bg-white/60 cursor-pointer transition-colors"
                  >
                    <p className="text-sm text-gray-900 truncate mb-1">{chat.title}</p>
                    <p className="text-xs text-gray-500">{chat.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">© Lebensessenzen | Ricarda Ludwig</p>
            </div>
          </aside>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="border-b border-gray-200 p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl lg:text-2xl font-medium text-gray-900">Kursbot</h1>
                  <p className="text-sm text-gray-600 mt-1">Stelle deine Fragen zum Kursmaterial</p>
                </div>
                <button 
                  onClick={() => navigate("/kundenbereich")}
                  className="text-sm text-[#D4A88C] hover:text-[#C9997A] transition-colors"
                >
                  Zurück zum Kundenbereich
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-8">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl text-gray-900 mb-3">Starte eine Konversation</h2>
                  <p className="text-gray-600 max-w-md">
                    Stelle eine Frage zum Kursmaterial und ich helfe dir gerne weiter.
                  </p>
                </div>
              ) : (
                <div className="max-w-3xl mx-auto space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                          message.isBot
                            ? 'bg-gradient-to-br from-[#F5EDE4] to-[#FAF3EC] text-gray-900'
                            : 'bg-[#D4A88C] text-white'
                        }`}
                      >
                        <p className="text-sm lg:text-base leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 lg:p-6 bg-white">
              <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
                <div className="flex gap-3 items-end">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Stelle eine Frage..."
                      rows={1}
                      className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A88C] focus:border-transparent resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(e);
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 bg-[#D4A88C] hover:bg-[#C9997A] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Dies ist eine Demo-Version. Echte KI-Antworten würden hier erscheinen.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}