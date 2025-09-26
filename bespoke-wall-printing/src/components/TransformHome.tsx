export function TransformHome() {
  return (
    <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            
            {/* Left Section - Main Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Callout Badge */}
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Revolutionary UV Printing Technology
              </div>
              
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Transform Your Home With Stunning Wall Art
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Our cutting-edge UV printing technology delivers breathtaking, high-resolution graphics 
                that transform any space into a personalized masterpiece. From bedroom murals to 
                living room feature walls, we bring your vision to life.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  Get Started
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border border-slate-200 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Portfolio
                </a>
              </div>
            </div>
            
            {/* Right Section - Featured Card */}
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                {/* Top Section - Dark Teal Background */}
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 px-4 sm:px-8 py-6 sm:py-12 text-white">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-medium opacity-90">2025 | March</span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">New Collection</h3>
                    <div className="w-8 sm:w-12 h-0.5 bg-white mx-auto mb-3 sm:mb-4"></div>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed">
                      Discover our latest release of beautifully crafted wall designs and murals.
                    </p>
                  </div>
                </div>
                
                {/* Bottom Section - Image */}
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Featured wall mural design"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Bottom CTA */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                      <div className="flex items-center justify-center text-slate-900 font-medium text-xs sm:text-sm">
                        <span className="mr-1 sm:mr-2">See All</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}