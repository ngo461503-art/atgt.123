"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotProps {
  onClose: () => void
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! 👋 Tôi là SafeRoad AI. Tôi có thể giúp bạn về an toàn giao thông, mẹo lái xe, và luật giao thông. Có gì tôi có thể giúp bạn?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        "an toàn":
          "An toàn giao thông là ưu tiên hàng đầu. Hãy luôn tuân thủ giới hạn tốc độ, đi đúng làn đường, và không sử dụng điện thoại khi lái xe.",
        mẹo: "Một số mẹo lái xe an toàn: (1) Giữ khoảng cách an toàn với xe phía trước, (2) Luôn kiểm tra gương chiếu hậu, (3) Tránh lái xe khi mệt mỏi.",
        luật: "Quy định giao thông bao gồm: Giới hạn tốc độ 40 km/h trong khu dân cư, 60 km/h trên đường hỗn hợp, và 80-100 km/h trên đường cao tốc.",
        "cảnh báo":
          "Chúng tôi cảnh báo về các nguy hiểm như tắc đường, tai nạn, thời tiết xấu, và vượt tốc độ. Luôn lắng nghe các cảnh báo này!",
      }

      const keyword = Object.keys(botResponses).find((key) => userMessage.text.toLowerCase().includes(key))

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text:
          keyword && botResponses[keyword]
            ? botResponses[keyword]
            : "Đó là câu hỏi tuyệt vời! 🚗 Bạn có thể hỏi tôi về an toàn lái xe, quy tắc giao thông, hoặc mẹo lái xe an toàn.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm">
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-200 flex flex-col h-96 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex items-center justify-between">
          <h3 className="font-bold flex items-center gap-2">
            <span>💬 SafeRoad AI</span>
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-blue-50 text-gray-800 border border-blue-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-blue-50 border border-blue-200 rounded-lg rounded-bl-none px-4 py-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-blue-200 p-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Gõ tin nhắn..."
            className="flex-1 border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition disabled:opacity-50"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  )
}
