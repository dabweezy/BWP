'use client'

import { Carousel, Card } from './AppleCardsCarousel'

export function Hero() {
  const carouselData = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Children's Room Mural",
      category: "Residential",
      content: "Whimsical Australian animals creating a magical playroom atmosphere that sparks imagination and wonder."
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Superhero Bedroom",
      category: "Residential",
      content: "Captain America themed bedroom mural bringing superhero adventures to life with stunning detail and vibrant colors."
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Corporate Motivational Wall",
      category: "Commercial",
      content: "Inspiring Simon Sinek quote creating an empowering workspace environment that motivates teams daily."
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gym Motivational Graphics",
      category: "Commercial",
      content: "Motivational fitness graphics encouraging gym members to stay committed and push their limits."
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kitchen Backsplash",
      category: "Residential",
      content: "Colorful backsplash designs that transform ordinary kitchens into extraordinary culinary spaces."
    }
  ]

  return (
    <section className="relative min-h-screen bg-gray-200 overflow-hidden">
      {/* Main curved container */}
      <div className="relative z-10 pt-6 pb-12 sm:pt-6 sm:pb-20">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-[98%] sm:max-w-[96%] mx-auto">
            {/* Large curved bubble container */}
            <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-[2rem] sm:rounded-[4rem] border-4 sm:border-8 border-white p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl" style={{
              boxShadow: 'inset 0 0 0 2px white, 0 0 0 4px white, 0 20px 40px rgba(0,0,0,0.1)'
            }}>
              {/* Navigation Bar inside the container */}
              <div className="mb-8 sm:mb-12">
                <nav className="flex justify-center">
                  <div className="bg-white/80 backdrop-blur-lg rounded-full px-4 sm:px-8 py-3 sm:py-3 shadow-xl border border-white/30 w-full max-w-sm sm:max-w-none">
                    <div className="flex items-center justify-between sm:space-x-8">
                      <a href="/" className="flex items-center">
                        <img
                          src="https://i.ibb.co/jkdk4sh9/small-logo.png"
                          alt="Bespoke Wall Printing Logo"
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      </a>
                      
                      <div className="hidden md:flex items-center space-x-6">
                        <a href="/" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                          Home
                        </a>
                        <a href="/about" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                          About
                        </a>
                        <a href="#faqs" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                          FAQs
                        </a>
                        <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                          Contact
                        </a>
                      </div>

                      <a
                        href="#contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full text-sm sm:text-sm font-medium shadow-lg border border-blue-200">
                    <span className="w-2 h-2 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                    Revolutionary UV Printing Technology
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Transform</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Space</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
                    Revolutionary direct UV printing technology delivering stunning, high-resolution designs and murals for your home or business.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
                    >
                      Get Started
                      <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="#process"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 text-sm sm:text-base"
                    >
                      <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      View Process
                    </a>
                  </div>
                  
                    {/* Feature highlights - Enhanced cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-2xl sm:text-3xl mb-3">🎨</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Any Image</h3>
                        <p className="text-xs sm:text-sm text-slate-600">Custom Designs</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-2xl sm:text-3xl mb-3">🏠</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Any Surface</h3>
                        <p className="text-xs sm:text-sm text-slate-600">Walls, Tiles, Glass</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-2xl sm:text-3xl mb-3">📏</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Any Size</h3>
                        <p className="text-xs sm:text-sm text-slate-600">From Small to Large</p>
                      </div>
                    </div>
                </div>

                {/* Right Content - Apple Cards Carousel */}
                <div className="relative flex items-center justify-center">
                  <Carousel 
                    items={carouselData.map((card, index) => (
                      <Card key={index} card={card} index={index} />
                    ))}
                    initialScroll={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
