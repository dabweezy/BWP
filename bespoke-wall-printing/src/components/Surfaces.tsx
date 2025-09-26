export function Surfaces() {
  return (
    <section className="py-24 bg-gray-200 relative overflow-hidden">
      
      <div className="w-full px-4 relative z-10">
        <div className="max-w-[96%] mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-[3rem] shadow-xl border-2 border-white p-8 lg:p-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Surfaces We Print On</h2>
              <p className="text-xl text-slate-600">At Bespoke Wall Printing we love versatility</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 text-center mb-12">
                From interior walls to brick, tiles, wood, glass, and more, we print on a wide range of surfaces. But we don't stop there – we can also personalize objects like laptops and canvases, turning any flat surface into a canvas for creativity. The only limits? Absorbable materials like cloth that absorb ink. Otherwise, whether it's floors or even ceiling tiles, we're here to transform your space with our innovative UV printing technology.
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { 
                    name: 'Interior Walls', 
                    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Children\'s room murals'
                  },
                  { 
                    name: 'Office Walls', 
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Corporate branding'
                  },
                  { 
                    name: 'Kitchen Tiles', 
                    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Colorful backsplashes'
                  },
                  { 
                    name: 'Garage Doors', 
                    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Street art murals'
                  },
                  { 
                    name: 'Restaurant Walls', 
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Themed decorations'
                  },
                  { 
                    name: 'Living Room Walls', 
                    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Floral murals'
                  },
                  { 
                    name: 'Cafe Walls', 
                    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Geometric patterns'
                  },
                  { 
                    name: 'Educational Spaces', 
                    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: 'Creative inspiration'
                  }
                ].map((surface, i) => (
                  <div key={i} className="text-center">
                    <div className="w-32 h-32 rounded-2xl mx-auto mb-4 overflow-hidden shadow-lg border-2 border-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:scale-105">
                      <img 
                        src={surface.image} 
                        alt={surface.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{surface.name}</h3>
                    <p className="text-sm text-slate-600">{surface.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
