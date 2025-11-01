export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🚗</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-700">SafeRoad AI</h1>
            <p className="text-xs text-blue-600">Lái xe an toàn hơn</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#intro" className="text-gray-700 hover:text-blue-600 transition">
            Giới thiệu
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Tính năng
          </a>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Bắt đầu
          </button>
        </nav>
      </div>
    </header>
  )
}
