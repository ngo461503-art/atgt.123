"use client"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">SafeDrive AI</h4>
            <p className="text-primary-foreground/80">Trợ lý thông minh cho an toàn giao thông</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Giá cả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  An niệm
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Công ty</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Pháp lý</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 SafeDrive AI. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
