import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Improve ROI with personal engagement and high efficient AI videos!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI Generate Personal Video Messages At Scale by switching names!
            </p>
            <button className="bg-green-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
              Book A Demo!
            </button>
            <div className="mt-6 flex items-center">
              <p className="text-sm text-gray-500 mr-2">Powered by No.1 WhatsApp Chatbot</p>
              <img src="https://via.placeholder.com/40x20" alt="App logo" className="h-5" />
              <img src="https://via.placeholder.com/60x20" alt="Wati logo" className="h-5 ml-2" />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-yellow-200 rounded-3xl p-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="AI Video Generation" 
                  className="rounded-2xl shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="absolute -right-4 top-1/4 transform translate-x-full">
                <div className="space-y-2">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-green-400 rounded-md p-1 shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                        alt={`AI Video ${index + 1}`}
                        className="w-20 h-12 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 transform translate-y-1/2">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero