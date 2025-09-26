'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          {/* Centered Pill Navigation */}
          <div className="bg-white/80 backdrop-blur-lg rounded-full px-8 py-3 shadow-lg border border-white/20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://i.ibb.co/jkdk4sh9/small-logo.png"
                  alt="Bespoke Wall Printing Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-slate-900">Bespoke</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                  Home
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                  About
                </Link>
                <Link href="#faqs" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                  FAQs
                </Link>
                <Link href="#contact" className="text-slate-700 hover:text-blue-600 font-medium px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                  Contact
                </Link>
              </div>

              <Link
                href="#contact"
                className="bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 top-6 p-2 bg-white/80 backdrop-blur-lg rounded-full shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 mx-4">
            <div className="flex flex-col space-y-2 p-6">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-full hover:bg-blue-50 transition-all">
                Home
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-full hover:bg-blue-50 transition-all">
                About
              </Link>
              <Link href="#faqs" className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-full hover:bg-blue-50 transition-all">
                FAQs
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-full hover:bg-blue-50 transition-all">
                Contact
              </Link>
              <Link
                href="#contact"
                className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors text-center mt-2"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
