"use client"

import { useEffect } from "react"

export default function ChatBot() {
  useEffect(() => {
    // Load Botpress chatbot script
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          configUrl: "https://files.bpcontent.cloud/2025/11/01/11/20251101115527-YX0F68NV.json",
          width: "360px",
          height: "480px",
        })
      }
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="chatbot" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Trò chuyện với AI</h2>
          <p className="text-lg text-foreground/70">
            Đặt câu hỏi bất cứ lúc nào và nhận câu trả lời tức thì từ trợ lý AI của chúng tôi
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary h-2"></div>
          <div className="p-8 text-center">
            <p className="text-foreground/60 mb-4">💬 Chatbot sẽ xuất hiện ở góc dưới bên phải màn hình</p>
            <div className="inline-block px-6 py-3 bg-blue-50 rounded-lg text-primary font-medium">
              Nhấp vào biểu tượng chat để bắt đầu cuộc trò chuyện
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
