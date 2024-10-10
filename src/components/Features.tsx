import React from 'react'
import { MessageCircle, ShoppingCart, ThumbsUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'Personal Welcome',
      description: 'Personal message to provide heartfelt welcome to customers, boost trust and loyalty!',
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-500" />,
      title: 'Abandoned Cart Recovery',
      description: 'Story-telling tone to awake the cart recovery, recover lost sales and encourage purchases!',
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-green-500" />,
      title: 'Post-Purchase Thank',
      description: 'Express personal thanks for customers and collect feedback to upgrade the product!',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Why use personalized video?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Empower your Customer Success Process and Create Personal Touch to improve ROI!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Abheek', 'Caiyao', 'Jon'].map((name, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative pb-[100%]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt={`${name}'s video`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold text-center">{name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features