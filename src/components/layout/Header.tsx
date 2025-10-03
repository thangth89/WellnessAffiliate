
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

const HELP_MENU_ITEMS = [
  { name: "FAQ", href: "/help/faq" },
  { name: "Support", href: "/help/support" },
  { name: "Contact", href: "/help/contact" },
  { name: "External Link", href: "https://example.com", isExternal: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Wellness
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}

            {/* Help dropdown */}
            <div className="relative">
              <button
                onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-primary-600"
              >
                Help <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {helpDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-20">
                  {HELP_MENU_ITEMS.map((helpItem) =>
                    helpItem.isExternal ? (
                      <a
                        key={helpItem.name}
                        href={helpItem.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {helpItem.name}
                      </a>
                    ) : (
                      <Link
                        key={helpItem.name}
                        href={helpItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {helpItem.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Help dropdown in mobile */}
          <div>
            <button
              onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
              className="flex items-center w-full text-gray-700 hover:text-primary-600"
            >
              Help <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {helpDropdownOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {HELP_MENU_ITEMS.map((helpItem) =>
                  helpItem.isExternal ? (
                    <a
                      key={helpItem.name}
                      href={helpItem.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block px-3 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors active:bg-gray-100"
                      onClick={() => {
                        setHelpDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {helpItem.name}
                    </a>
                  ) : (
                    <Link
                      key={helpItem.name}
                      href={helpItem.href}
                      className="block px-3 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors active:bg-gray-100"
                      onClick={() => {
                        setHelpDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {helpItem.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
