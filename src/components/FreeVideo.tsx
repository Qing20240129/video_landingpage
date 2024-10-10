import React, { useState } from 'react'

const FreeVideo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted:', { name, email })
    // Reset form fields
    setName('')
    setEmail('')
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Create Free Personal Video for you!</h2>
        <p className="text-xl text-center text-gray-600 mb-2">We will send you a personal welcome video!</p>
        <p className="text-xl text-center text-gray-600 mb-8">
          And we plan to empower <span className="font-bold">1000 business</span> to grow with personalized video messages, Join us for FREE!
        </p>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
          >
            Join us for FREE!
          </button>
        </form>
      </div>
    </section>
  )
}

export default FreeVideo