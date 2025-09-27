export function Testimonials() {
  const benefits = [
    {
      icon: "🌍",
      title: "Environmentally Friendly",
      description: "Smaller carbon footprint than traditional wall graphic techniques."
    },
    {
      icon: "🍃",
      title: "Non-toxic",
      description: "Safe, non-flammable, odourless and non-toxic inks."
    },
    {
      icon: "💪",
      title: "Extremely Durable",
      description: "Indoor prints last over 12 years. Scratch, water and solvent resistant, no peeling."
    },
    {
      icon: "⭐",
      title: "Professional Finish",
      description: "Perfect finish, no mismatched seams or mistakes."
    },
    {
      icon: "🔍",
      title: "High Resolution Graphics",
      description: "Vibrant and accurate colours in high resolution (2880 pixels)."
    },
    {
      icon: "🧽",
      title: "Easy To Maintain",
      description: "Wipe clean whenever needed."
    },
    {
      icon: "🖨️",
      title: "Direct Printing",
      description: "HD graphics directly onto your wall. No mess, no seams and instantly dry."
    },
    {
      icon: "⚙️",
      title: "Simple Application Process",
      description: "No complicated or distributive setup, quick and quiet application."
    },
    {
      icon: "🔄",
      title: "Easily Updated",
      description: "If you need to change or remove your design, simply paint over it."
    }
  ]

  return (
    <section className="py-12 sm:py-24 bg-gray-200 relative overflow-hidden">
      
      <div className="w-full px-4 relative z-10">
        <div className="max-w-[96%] mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-[3rem] shadow-xl border-2 border-white p-8 lg:p-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why UV Wall Printing</h2>
              <p className="text-xl text-slate-600">Discover the advantages of our cutting-edge technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-white/90 to-slate-50/90 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-slate-100">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
