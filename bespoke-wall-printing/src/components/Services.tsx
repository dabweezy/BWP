export function Services() {
  return (
    <section className="py-24 bg-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Business Advertisement & Graphics
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Transform your commercial space with our cutting-edge UV printing technology, 
                delivering stunning results that enhance brand visibility and customer engagement.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              
              {/* Left - Key Statistics */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="text-7xl lg:text-8xl font-bold text-slate-900 mb-4">85%</div>
                  <p className="text-xl text-slate-700 font-medium">
                    Increase in brand visibility with UV printed graphics
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-slate-900 rounded-full flex-shrink-0"></div>
                    <span className="text-lg text-slate-700">High-resolution printing on any surface</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-slate-900 rounded-full flex-shrink-0"></div>
                    <span className="text-lg text-slate-700">Durable, long-lasting results</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-slate-900 rounded-full flex-shrink-0"></div>
                    <span className="text-lg text-slate-700">Professional installation service</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right - Business Types */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Office Spaces</h3>
                      <p className="text-sm text-slate-600">Professional branding & motivational graphics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Hospitality Venues</h3>
                      <p className="text-sm text-slate-600">Restaurants, cafes & themed environments</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Retail Stores</h3>
                      <p className="text-sm text-slate-600">Eye-catching displays & brand enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description Section */}
            <div className="border-t border-slate-200 pt-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Transform your office, reception, or boardroom with Bespoke Wall Printing's direct UV wall printing service – the perfect solution for adding branding elements or captivating murals to your workspace.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our innovative technology allows us to print high-resolution images on a variety of surfaces, from brick and wood to glass. This makes our service ideal for eye-catching shop front displays, stylish café or restaurant wall menus and designs, and even motivational graphics for gym walls. Let us help you bring your vision to life with stunning, personalised prints that leave a lasting impression.
                  </p>
                </div>
                
                {/* Right side - Image */}
                <div className="aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Office wall with UV printed branding"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
