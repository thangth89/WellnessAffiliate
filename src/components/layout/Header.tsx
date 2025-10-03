'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const helpRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal = false) => {
    if (isExternal) {
      e.preventDefault();
      window.location.href = href;
    } else {
      e.preventDefault();
      router.push(href);
    }
    setHelpDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setHelpDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    {
      label: 'Help',
      subItems: [
        { label: 'FAQ', href: '/help/faq' },
        { label: 'Support', href: '/help/support' },
        { label: 'External Link', href: 'https://example.com', external: true },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold">Logo</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative" ref={item.label === 'Help' ? helpRef : null}>
                {item.subItems ? (
                  <button
                    onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                    className={`hover:text-blue-600 ${pathname.startsWith('/help') ? 'text-blue-600' : ''}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href} className={`hover:text-blue-600 ${pathname === item.href ? 'text-blue-600' : ''}`}>
                    {item.label}
                  </Link>
                )}

                {item.subItems && helpDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    {item.subItems.map((sub) => (
                      sub.external ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleNavigation(e, sub.href, true)}
                          className="block px-4 py-2 hover:bg-gray-100"
                          rel="nofollow noopener noreferrer"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleNavigation(e, sub.href)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.label}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative" ref={item.label === 'Help' ? helpRef : null}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                      className={`w-full text-left hover:text-blue-600 ${pathname.startsWith('/help') ? 'text-blue-600' : ''}`}
                    >
                      {item.label}
                    </button>
                    {helpDropdownOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((sub) => (
                          sub.external ? (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleNavigation(e, sub.href, true)}
                              className="block px-4 py-2 hover:bg-gray-100"
                              rel="nofollow noopener noreferrer"
                            >
                              {sub.label}
                            </a>
                          ) : (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleNavigation(e, sub.href)}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sub.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md hover:text-blue-600 ${pathname === item.href ? 'text-blue-600' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
