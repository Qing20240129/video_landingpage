import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FreeVideo from './components/FreeVideo'
import Features from './components/Features'
import Stats from './components/Stats'
import Integration from './components/Integration'
import WhatsApp from './components/WhatsApp'
import Capabilities from './components/Capabilities'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FreeVideo />
      <Features />
      <Stats />
      <Integration />
      <WhatsApp />
      <Capabilities />
      <Footer />
    </div>
  )
}

export default App