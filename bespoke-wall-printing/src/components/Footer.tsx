import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white py-16 relative">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8">
          
          {/* Brand Logo and Name */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="https://i.ibb.co/jkdk4sh9/small-logo.png"
                alt="Bespoke Wall Printing Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-slate-900">bespokewallprinting</span>
            </Link>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Product</h3>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="#services" className="hover:text-slate-900 transition-colors">Features</Link></li>
              <li><Link href="#contact" className="hover:text-slate-900 transition-colors">Pricing</Link></li>
              <li><Link href="#process" className="hover:text-slate-900 transition-colors">Process</Link></li>
              <li><Link href="#portfolio" className="hover:text-slate-900 transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="#contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link href="#faqs" className="hover:text-slate-900 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
              <li><Link href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="absolute bottom-0 left-0 right-0 text-center -mb-8">
        <div className="text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-slate-100 select-none pointer-events-none opacity-30 leading-none">
          bespokewallprinting
        </div>
      </div>
    </footer>
  )
}
