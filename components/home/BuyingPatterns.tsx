"use client"
import React from 'react'
import { motion } from 'framer-motion' 

const content = [
  {
    id: '01',
    title: "Decode Your Birth Chart",
    description: "Unveil the cosmic blueprint of your life. Discover how the positions of the planets and stars at your exact moment of birth shape your personality, destiny, and unique gifts.",
    images: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    title: "Connect with Expert Astrologers",
    description: "Gain deep clarity on love, career, and timing. Schedule one-on-one sessions with verified Western and Vedic astrologers who resonate with your personal journey.",
    images: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    title: "Align with Lunar & Planetary Transits",
    description: "Harness the power of moon phases, retrogrades, and daily planetary movements with tailored horoscopes and actionable cosmic guidance.",
    images: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=800&auto=format&fit=crop'
  }
]

const BuyingPatterns = () => {
  return (
    <main className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
        {content.map((item, index) => {
          // Check if index is even (0, 2, 4...) or odd (1, 3, 5...)
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:items-center gap-8 md:gap-16 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* 1. Image Container */}
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-sm aspect-[4/3] bg-gray-100">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* 2. Text Content Container */}
              <div
                className={`w-full md:w-1/2 flex flex-col justify-center space-y-4 ${
                  isEven ? 'text-left' : 'text-left md:text-right'
                }`}
              >
                {/* Number Badge with Pipe line */}
                <div
                  className={`flex items-center gap-2 text-2xl md:text-3xl font-light ${
                    isEven ? 'justify-start' : 'justify-start md:justify-end'
                  }`}
                >
                  {isEven ? (
                    <>
                      <span className="text-gray-300 font-thin">|</span>
                      <span className="font-bold text-gray-900">{item.id}</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-gray-900">{item.id}</span>
                      <span className="text-gray-300 font-thin">|</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}

export default BuyingPatterns