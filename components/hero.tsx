"use client"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6 leading-tight">
          Trợ lý AI <span className="text-secondary">An toàn Giao thông</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
          Hỗ trợ thông minh giúp bạn lái xe an toàn hơn mỗi ngày. Nhận cảnh báo thời gian thực, mẹo lái xe an toàn và
          thông tin luật giao thông.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition font-semibold text-lg">
            Khám phá ngay
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition font-semibold text-lg">
            Xem demo
          </button>
        </div>
      </div>
    </section>
  )
}
