export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Children's Room Mural",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Whimsical Australian animals mural creating a magical playroom atmosphere",
      highlight: "Featured in Home & Garden Magazine"
    },
    {
      id: 2,
      title: "Superhero Bedroom",
      category: "Residential", 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Captain America themed bedroom mural bringing superhero adventures to life",
      highlight: "Award-winning design"
    },
    {
      id: 3,
      title: "Corporate Motivational Wall",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Inspiring Simon Sinek quote creating an empowering workspace environment",
      highlight: "500+ employee workspace"
    },
    {
      id: 4,
      title: "Gym Motivational Graphics",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Motivational fitness graphics encouraging gym members to stay committed",
      highlight: "Increased member engagement by 35%"
    }
  ]

  return (
    <section className="py-24 bg-gray-200 relative overflow-hidden">
      
      <div className="w-full px-4 relative z-10">
        <div className="max-w-[96%] mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-[3rem] shadow-xl border-2 border-white p-8 lg:p-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover how we've transformed spaces with stunning UV printing designs across residential, commercial, and hospitality projects.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed mb-4">{item.description}</p>
                    <div className="text-center">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#portfolio" className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  View All Projects
                </a>
                <a href="#contact" className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}