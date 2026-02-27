import { Send, Maximize2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
}

export function ChatWidget() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hallo! Ich bin dein Kursbot. Stelle mir eine Frage zum Kursmaterial.",
      isBot: true,
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Das ist eine Demo-Antwort. Für die vollständige Konversation öffne den Vollbild-Modus.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgba(201,181,160,0.15)] border border-[#E8DCC4]/30 overflow-hidden flex flex-col h-[500px] md:h-[600px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D4A88C] to-[#C9B5A0] text-white p-4 md:p-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-medium">Kursbot</h3>
          <p className="text-xs md:text-sm text-white/80">Schnelle Hilfe zum Material</p>
        </div>
        <button
          onClick={() => navigate("/kursbot")}
          className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          title="Vollbild öffnen"
        >
          <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl md:rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                message.isBot
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-[#D4A88C] text-white"
              }`}
            >
              <p className="text-xs md:text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 md:p-4 bg-white border-t border-[#E8DCC4]/30">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Stelle eine Frage..."
            className="flex-1 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A88C] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A88C] hover:bg-[#C9997A] text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
