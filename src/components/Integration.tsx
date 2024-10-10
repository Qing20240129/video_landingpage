import React from 'react'

const Integration = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Commi = Playground + API</h2>
        <p className="text-2xl text-center text-gray-600 mb-12">Choose the best way to implement into your workflow!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-pink-100 text-gray-800 text-2xl font-semibold py-3 px-8 rounded-full mb-4">
              AI Playground
            </div>
            <p className="text-xl text-gray-600 mb-8">Easy Generation in 3 Clicks!</p>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="AI Playground" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-100 text-gray-800 text-2xl font-semibold py-3 px-8 rounded-full mb-4">
              API
            </div>
            <p className="text-xl text-gray-600 mb-8">Bulk Video Messages Generation & Broadcast</p>
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="API Integration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration