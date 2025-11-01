export default function Features() {
  const features = [
    {
      icon: "⚠️",
      title: "Cảnh báo nguy hiểm",
      description:
        "Nhận cảnh báo thời gian thực về các tình huống nguy hiểm trên đường như tắc đường, tai nạn, hoặc thời tiết xấu.",
    },
    {
      icon: "✅",
      title: "Mẹo lái xe an toàn",
      description: "Học hỏi những mẹo lái xe an toàn từ các chuyên gia. Cải thiện kỹ năng lái xe của bạn mỗi ngày.",
    },
    {
      icon: "📜",
      title: "Luật giao thông",
      description: "Cập nhật các quy định luật giao thông mới nhất. Tránh vi phạm và an toàn trên mọi con đường.",
    },
    {
      icon: "🚨",
      title: "Phát hiện quá tốc độ",
      description: "Tự động cảnh báo khi bạn vượt quá tốc độ cho phép. Giúp bạn tuân thủ các quy định tốc độ.",
    },
    {
      icon: "😴",
      title: "Phát hiện mệt mỏi",
      description: "Cảnh báo khi bạn có dấu hiệu mệt mỏi. Gợi ý dừng lại để nghỉ ngơi an toàn.",
    },
    {
      icon: "🗺️",
      title: "Lộ trình thông minh",
      description: "Đề xuất lộ trình tối ưu và an toàn nhất. Tránh các khu vực nguy hiểm và tắc đường.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính năng chính</h2>
          <p className="text-lg text-gray-600">Các tính năng được thiết kế để giúp bạn lái xe an toàn hơn</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg hover:border-blue-300 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
