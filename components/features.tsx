"use client"

const featuresList = [
  {
    icon: "⚠️",
    title: "Cảnh báo Nguy hiểm",
    description:
      "Nhận cảnh báo thời gian thực về các nguy hiểm tiềm ẩn, tình trạng giao thông, và điều kiện đường xá xấu.",
  },
  {
    icon: "🎯",
    title: "Mẹo Lái xe An toàn",
    description:
      "Những lời khuyên từ chuyên gia về kỹ thuật lái xe an toàn, quản lý căng thẳng khi lái, và xử lý tình huống khẩn cấp.",
  },
  {
    icon: "⚖️",
    title: "Luật Giao thông",
    description: "Truy cập đầy đủ thông tin về luật giao thông hiện hành, quy tắc đường bộ, và các hình phạt vi phạm.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Tính năng chính</h2>
          <p className="text-lg text-foreground/70">Những công cụ giúp bạn lái xe an toàn và tự tin</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl border border-blue-100 hover:shadow-lg transition group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
