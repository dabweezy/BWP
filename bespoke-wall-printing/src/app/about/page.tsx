import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                About Us
              </h1>
              <p className="text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                A friendly & professional team committed to revolutionizing the way you envision and transform your spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Welcome to Bespoke Wall Printing, our mission is to revolutionise the way you envision and transform your spaces through our cutting-edge direct UV printing technology. With stunning, high-resolution designs and murals, we bring your imagination to life.
                </p>
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    There are many reasons for choosing our professional service.
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <p className="text-slate-600 font-medium">Meeting room with motivational print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Innovation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Commitment to Quality and Innovation
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                At Bespoke Wall Printing, we pride ourselves on delivering unmatched quality, cost-effectiveness, and simplicity in our printing solutions. Our advanced UV printing technology ensures that your prints are not only visually striking but also durable and long-lasting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Residential Spaces</h3>
                <p className="text-slate-600 leading-relaxed">
                  Elevate your home with captivating murals, striking feature walls, and personalised designs on any vertical surface.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Business Solutions</h3>
                <p className="text-slate-600 leading-relaxed">
                  Branding elements and captivating graphics for offices, receptions, and boardrooms with eye-catching displays.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Advanced Technology</h3>
                <p className="text-slate-600 leading-relaxed">
                  Straightforward process making the transformation of your space easier and quicker than ever before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Booking Process
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Our booking process is simple and straightforward, consisting of three easy steps:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Discuss</h3>
                <p className="text-slate-600 leading-relaxed">
                  Contact us to discuss your vision, and we'll provide a no-obligation cost estimate.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Visualise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Once your vision is finalised, we'll present a preview of the final result before printing begins.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Create</h3>
                <p className="text-slate-600 leading-relaxed">
                  Witness your vision come to life as we set up our cutting-edge technology to print your masterpiece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                  Versatility in Printing Surfaces
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  At Bespoke Wall Printing, versatility is our specialty. From interior walls to brick, tiles, wood, glass, and more, we print on a wide range of surfaces. Additionally, we can personalise objects like laptops and suitcases, turning any flat surface into a canvas for creativity.
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {['🏠', '🧱', '🔲', '🪵', '🪟', '💻', '🎨', '🏢'].map((icon, i) => (
                    <div key={i} className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🍽️</span>
                  </div>
                  <p className="text-slate-600 font-medium">Diner with food print on the wall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Environmentally Friendly and Professional
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Our commitment to sustainability is reflected in our environmentally friendly practices, with a smaller carbon footprint than traditional wall graphic techniques.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Quality & Durability</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Non-toxic, safe, and non-flammable inks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    High-quality, accurate, and brilliant colour resolution
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Scratch and abrasion-resistant
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Waterproof and solvent-resistant
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Longevity & Maintenance</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Lasting for more than 12 years indoors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Easy to maintain with a simple wipe clean
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Professional finish guaranteed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Extremely durable prints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              The Future of Interior Design
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the future of interior design with Bespoke Wall Printing. Transform your space with stunning, personalised prints that leave a lasting impression.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Contact us today to bring your vision to life.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:02071014671" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                  Call: 020 7101 4671
                </a>
                <a href="mailto:info@bespokewallprinting.co.uk" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
