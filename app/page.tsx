"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Chatbot from "@/components/chatbot"
import Footer from "@/components/footer"

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-background">
      <Header />
      <Hero onChatOpen={() => setShowChat(true)} />
      <Features />
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      <Footer onChatOpen={() => setShowChat(true)} />
    </div>
  )
}
