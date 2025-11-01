"use client"

interface HeroProps {
  onChatOpen: () => void
}

export default function Hero({ onChatOpen }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center space-y-8">
        <div className="inline-block">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            ✨ Công nghệ AI tiên tiến
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-balance">
          Trợ lý AI An toàn <span className="text-blue-600">Giao thông</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
          Hãy để AI của chúng tôi giúp bạn lái xe an toàn hơn. Nhận cảnh báo thời gian thực, mẹo lái xe thông minh, và
          cập nhật luật giao thông.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={onChatOpen}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            💬 Tư vấn ngay
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </section>
  )
}
