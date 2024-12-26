"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  return (
    <header className="w-full bg-primaryAccent bg-[url('/images/header-bg-2.png')] bg-repeat">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 -mx-4">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-4">
            <Image
              src="/images/logo-lime.svg"
              alt="Aventiv Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem
              href="/what-we-do"
              hasDropdown
              dropdownItems={[
                { label: "JPay", href: "/what-we-do/jpay" },
                { label: "Securus", href: "/what-we-do/securus" },
              ]}
            >
              What We Do
            </NavItem>
            <NavItem
              href="/transformation"
              hasDropdown
              dropdownItems={[
                {
                  label: "Digital Transformation",
                  href: "/transformation/digital",
                },
                {
                  label: "Business Transformation",
                  href: "/transformation/business",
                },
              ]}
            >
              Transformation
            </NavItem>
            <NavItem
              href="/press"
              hasDropdown
              dropdownItems={[
                { label: "News", href: "/press/news" },
                { label: "Media Kit", href: "/press/media-kit" },
              ]}
            >
              Press
            </NavItem>
            <NavItem href="/suppliers">Suppliers</NavItem>
            <NavItem href="/careers">Careers</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
        </nav>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

function NavItem({ href, children, hasDropdown, dropdownItems }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <Link
        href={href}
        className="flex items-center text-white hover:text-[#b5e48c] transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{children}</span>
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>

      {hasDropdown && isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {dropdownItems?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
