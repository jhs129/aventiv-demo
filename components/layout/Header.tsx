"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import headerContent from "./Header.content.json";

export default function Header() {
  const navigation = headerContent.results[0].data.level1;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primaryAccent bg-[url('/images/header-bg-2.png')] bg-repeat">
      <div className="px-4 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16 max-w-screen-2xl mx-auto">
          <div id="logo-container" className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-lime.svg"
                alt="Aventiv Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {!isMobileMenuOpen && (
            <button
              className="lg:hidden flex items-center justify-center text-white hover:text-[#b5e48c] my-auto p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-8 w-8" />
            </button>
          )}

          <div
            id="nav-container"
            className="hidden lg:flex items-center space-x-8 ml-auto"
          >
            {navigation.map((item) => (
              <NavItem
                key={item.text}
                href={
                  item.href ||
                  `/${item.text.toLowerCase().replace(/\s+/g, "-")}`
                }
                hasDropdown={item.level2?.length > 0}
                dropdownItems={
                  item.level2?.map((subItem) => ({
                    label: subItem.text,
                    href:
                      (subItem as { href?: string }).href ||
                      `/${subItem.text.toLowerCase().replace(/\s+/g, "-")}`,
                  })) || []
                }
              >
                {item.text}
              </NavItem>
            ))}
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-primaryAccent">
              <div className="px-4 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 max-w-screen-2xl mx-auto">
                  <div className="flex-1">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/images/logo-lime.svg"
                        alt="Aventiv Logo"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </div>
                  <button
                    className="flex items-center justify-center text-white hover:text-[#b5e48c] my-auto p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-8 w-8" />
                  </button>
                </div>
              </div>

              <div className="px-4 md:px-8 lg:px-12 mt-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <MobileNavItem
                      key={item.text}
                      item={item}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavigationItem;
  onClose: () => void;
}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div className="text-white">
      {item.level2?.length ? (
        <>
          <button
            className="flex items-center justify-between w-full py-2 text-lg font-medium hover:text-[#b5e48c]"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            {item.text}
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                isSubMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isSubMenuOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {item.level2.map((subItem) => (
                <Link
                  key={subItem.text}
                  href={
                    subItem.href ||
                    `/${subItem.text.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="block py-2 text-white hover:text-[#b5e48c]"
                  onClick={onClose}
                >
                  {subItem.text}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href || `/${item.text.toLowerCase().replace(/\s+/g, "-")}`}
          className="block py-2 text-lg font-medium text-white hover:text-[#b5e48c]"
          onClick={onClose}
        >
          {item.text}
        </Link>
      )}
    </div>
  );
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: Array<{ label: string; href: string }>;
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

interface NavigationItem {
  text: string;
  href?: string;
  level2?: Array<{
    text: string;
    href?: string;
  }>;
}
