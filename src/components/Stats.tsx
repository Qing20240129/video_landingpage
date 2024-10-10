import React from 'react'

const Stats = () => {
  const stats = [
    { value: '10x', label: 'Personal Engagement' },
    { value: '8x', label: 'Higher Response Rate' },
    { value: '+30', label: 'User Satisfaction' },
    { value: '5x', label: 'Conversion uplift' },
  ]

  return (
    <section className="bg-green-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Personalized Video Messages helps a lot on personal engagement, build trust and drive sales!</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats