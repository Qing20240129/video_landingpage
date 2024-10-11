import React from 'react'

const Stats = () => {
  const stats = [
    { value: '10x', label: 'Personal Engagement' },
    { value: '8x', label: 'Higher Response Rate' },
    { value: '+30', label: 'User Satisfaction' },
    { value: '5x', label: 'Conversion uplift' },
  ]

  return (
    <section>
      <div className="container px-20 py-10">
        <h2 className="text-[22px] font-bold mb-9">
          Personalized Video Messages helps a lot on personal engagement, build
          trust and drive sales!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-7xl font-bold text-wati-green mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-wati-green">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats