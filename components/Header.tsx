'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Goat Meat', href: '/goat-meat-upstate-ny' },
  { label: 'Our Practices', href: '/#our-practices' },
  { label: 'Service Area', href: '/#service-area' },
  { label: 'How to Buy', href: '/#how-to-buy' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Willow Anchor Farm home">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1.5">
            <Image src="/willow-anchor-logo.png" alt="" width={42} height={39} />
          </span>
          <span className="hidden text-lg font-medium tracking-wide text-white sm:block">Willow Anchor Farm</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:william@willowanchorfarm.com?subject=Willow%20Anchor%20Farm%20Inquiry"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#3f5b38] transition-colors hover:bg-white/90"
          >
            Contact Us
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-black/90 px-5 py-5 backdrop-blur-md md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:william@willowanchorfarm.com?subject=Willow%20Anchor%20Farm%20Inquiry" className="mt-2 block rounded-full bg-white px-4 py-3 text-center font-semibold text-[#3f5b38]">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
