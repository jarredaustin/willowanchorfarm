'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          {/* Removed Image component */}
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-4 right-6 text-white hover:text-[#4A6741] transition-colors duration-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full right-0 w-48 max-h-[50vh] overflow-y-auto bg-black/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          <ul className="py-2 px-4 flex flex-col items-end gap-2">
            <li><Link href="/" className="text-sm text-white hover:text-[#4A6741] transition-colors duration-200">Home</Link></li>
            <li><Link href="/about" className="text-sm text-white hover:text-[#4A6741] transition-colors duration-200">About</Link></li>
            <li><Link href="/products" className="text-sm text-white hover:text-[#4A6741] transition-colors duration-200">Products</Link></li>
            <li><a href="mailto:william@willowanchorfarm.com?subject=Willow%20Anchor%20Farm%20Inquiry" className="text-sm text-white hover:text-[#4A6741] transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
