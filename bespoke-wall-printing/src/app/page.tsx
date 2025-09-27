import { Hero } from '@/components/Hero'
import { TransformHome } from '@/components/TransformHome'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Portfolio } from '@/components/Portfolio'
import { Surfaces } from '@/components/Surfaces'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Highlight } from '@/components/HeroHighlight'

export default function Home() {
  return (
           <main className="bg-gray-200 overflow-x-hidden">
      <Hero />
      
      {/* Transition section - Playful bubble design */}
      <section className="py-24 bg-gray-200 relative">
        
        <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                Leverage the power of <Highlight>UV printing</Highlight> in 
                <span className="text-slate-900"> wall design</span>
              </h2>
              
              {/* Icon bubbles with enhanced styling */}
              <div className="flex justify-center items-center space-x-6 mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-2xl shadow-lg border border-blue-200 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse">🏠</div>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-3xl shadow-lg border border-green-200 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse delay-500">🏢</div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-2xl shadow-lg border border-purple-200 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse delay-1000">✨</div>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                From residential homes to commercial spaces, our cutting-edge technology transforms any surface into a canvas for your creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TransformHome />
      <Services />
      <Process />
      <Portfolio />
      <Surfaces />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}