import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ChatBot from "@/components/chatbot"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ChatBot />
      <Footer />
    </main>
  )
}
