"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">🚗</span>
            </div>
            <span className="text-xl font-bold text-primary">SafeDrive AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#intro" className="text-foreground hover:text-primary transition">
              Giới thiệu
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition">
              Tính năng
            </a>
            <a href="#chatbot" className="text-foreground hover:text-primary transition">
              Hỗ trợ
            </a>
          </nav>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition font-medium">
            Bắt đầu
          </button>
        </div>
      </div>
    </header>
  )
}
