import React from 'react'

const WhatsApp = () => {
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
              alt="WhatsApp Integration" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Personalized WhatsApp Video Messages</h2>
            <p className="text-xl text-gray-600 mb-8">
              Generate Personalized Video Messages and send them to WhatsAPP by easy steps!
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Book A Demo!
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Bulk Video Creation" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Switch variables to create bulk of videos!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Generate bulk of videos by switching variables, for example, &#123;&#123;name&#125;&#125;...
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Book A Demo!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsApp