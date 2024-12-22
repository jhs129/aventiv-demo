'use client'

import Link from "next/link"
import { ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-emerald-700 bg-[url('/images/grid-pattern.svg')] bg-repeat">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[#b5e48c] text-2xl font-semibold tracking-wider">
              aventiv
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem href="/what-we-do" hasDropdown>
              What We Do
            </NavItem>
            <NavItem href="/transformation" hasDropdown>
              Transformation
            </NavItem>
            <NavItem href="/press" hasDropdown>
              Press
            </NavItem>
            <NavItem href="/suppliers">
              Suppliers
            </NavItem>
            <NavItem href="/careers">
              Careers
            </NavItem>
            <NavItem href="/contact">
              Contact
            </NavItem>
          </div>
        </nav>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string
  children: React.ReactNode
  hasDropdown?: boolean
}

function NavItem({ href, children, hasDropdown }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center text-white hover:text-[#b5e48c] transition-colors"
    >
      <span>{children}</span>
      {hasDropdown && (
        <ChevronDown className="ml-1 h-4 w-4" />
      )}
    </Link>
  )
}

