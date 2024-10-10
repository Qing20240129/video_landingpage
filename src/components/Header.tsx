import React from 'react'
import { Play } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Play className="text-green-500 w-8 h-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">commi</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">AI Personalized Video</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">WhatsApp Video Messages</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">API Generation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blogs</a></li>
          </ul>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Book a Demo</button>
      </div>
    </header>
  )
}

export default Header