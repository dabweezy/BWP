export function Process() {
  return (
    <section id="process" className="py-12 sm:py-24 bg-gray-200 relative overflow-hidden">
      
      <div className="w-full px-4 relative z-10">
        <div className="max-w-[96%] mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-[3rem] shadow-xl border-2 border-white p-8 lg:p-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Booking Process Steps</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Simple steps to transform your space with our cutting-edge UV printing technology</p>
            </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>
          
          {[
            {
              step: 1,
              title: "Discuss",
              description: "Contact us to discuss your vision, we'll explore your requirements, ignite your creativity and provide a no-obligation cost estimate for your consideration.",
              color: "from-blue-500 to-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200"
            },
            {
              step: 2,
              title: "Visualise",
              description: "Provide us with the artwork you envision, or let us bring your ideas to life. Before any printing begins, we'll present a preview of the final result, ensuring your confidence and satisfaction with the upcoming project.",
              color: "from-purple-500 to-purple-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200"
            },
            {
              step: 3,
              title: "Create",
              description: "Witness your vision come to life! We will arrive and set up our cutting edge technology to print your masterpiece, get ready to be impressed by your transformed space!",
              color: "from-pink-500 to-pink-600",
              bgColor: "bg-pink-50",
              borderColor: "border-pink-200"
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-white hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-center text-sm">
                    {item.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-6 flex justify-center">
                    <div className={`w-8 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-12 transition-all duration-300`}></div>
                  </div>
                </div>
              </div>
              
              {/* Arrow for mobile */}
              {index < 2 && (
                <div className="md:hidden flex justify-center mt-6">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Ready to Start Your Project?</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
