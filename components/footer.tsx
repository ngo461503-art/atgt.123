"use client"

interface FooterProps {
  onChatOpen: () => void
}

export default function Footer({ onChatOpen }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-blue-600/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="font-bold">SafeRoad AI</h3>
            </div>
            <p className="text-gray-400 text-sm">Giải pháp AI an toàn giao thông số 1</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tính năng</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Cảnh báo nguy hiểm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Mẹo lái xe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Luật giao thông
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <button
              onClick={onChatOpen}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
            >
              Liên hệ AI Assistant
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">© 2025 SafeRoad AI. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
