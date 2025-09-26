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
      <div className="relative z-10 pt-4 pb-8 sm:pt-6 sm:pb-20">
        <div className="w-full px-2 sm:px-4">
          <div className="max-w-[98%] sm:max-w-[96%] mx-auto">
            {/* Large curved bubble container */}
            <div className="bg-[#E8E8E8] backdrop-blur-sm rounded-[1.5rem] sm:rounded-[4rem] border-2 sm:border-8 border-white p-3 sm:p-8 lg:p-12 relative overflow-hidden" style={{
              boxShadow: 'inset 0 0 0 1px white, 0 0 0 2px white'
            }}>
              {/* Navigation Bar inside the container */}
              <div className="mb-4 sm:mb-12">
                <nav className="flex justify-center">
                  <div className="bg-white/60 backdrop-blur-lg rounded-full px-3 sm:px-8 py-2 sm:py-3 shadow-lg border border-white/20 w-full max-w-xs sm:max-w-none">
                    <div className="flex items-center justify-between sm:space-x-8">
                      <a href="/" className="flex items-center">
                        <img
                          src="https://i.ibb.co/jkdk4sh9/small-logo.png"
                          alt="Bespoke Wall Printing Logo"
                          className="w-5 h-5 sm:w-8 sm:h-8"
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
                        className="bg-slate-900 text-white px-2 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-slate-800 transition-colors text-xs sm:text-base"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="inline-flex items-center px-3 sm:px-6 py-1.5 sm:py-3 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-slate-200">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                    Revolutionary UV Printing Technology
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                    <span className="text-slate-900">Transform</span>
                    <br />
                    <span className="text-slate-900">Your Space</span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed max-w-lg">
                    Revolutionary direct UV printing technology delivering stunning, high-resolution designs and murals for your home or business.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-base"
                    >
                      Get Started
                      <svg className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="#process"
                      className="inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 text-xs sm:text-base"
                    >
                      <svg className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      View Process
                    </a>
                  </div>
                  
                    {/* Feature highlights - Clean cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                        <div className="text-lg sm:text-2xl mb-1 sm:mb-3">🎨</div>
                        <h3 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-xs sm:text-base">Any Image</h3>
                        <p className="text-xs sm:text-sm text-slate-600">Custom Designs</p>
                      </div>
                      
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                        <div className="text-lg sm:text-2xl mb-1 sm:mb-3">🏠</div>
                        <h3 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-xs sm:text-base">Any Surface</h3>
                        <p className="text-xs sm:text-sm text-slate-600">Walls, Tiles, Glass</p>
                      </div>
                      
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                        <div className="text-lg sm:text-2xl mb-1 sm:mb-3">📏</div>
                        <h3 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-xs sm:text-base">Any Size</h3>
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
