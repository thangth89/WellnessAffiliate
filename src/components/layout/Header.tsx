'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS, HELP_MENU_ITEMS } from '@/lib/constants';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHelpDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Đóng menu khi route thay đổi
  useEffect(() => {
    setMobileMenuOpen(false);
    setHelpDropdownOpen(false);
  }, [pathname]);

  const handleMobileHelpItemClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      setMobileMenuOpen(false);
      setHelpDropdownOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink min-w-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-6 h-6 sm:w-8 sm:h-8 border-2 border-emerald-500 rounded-full opacity-30"></div>
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 border-2 border-teal-500 rounded-full opacity-50"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                <svg className="absolute w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center min-w-0">
              <p className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-600 bg-clip-text text-transparent truncate">
                GoWellnessUnlocked
              </p>
              <span className="text-gray-600 text-base sm:text-xl md:text-2xl font-bold flex-shrink-0">.com</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.name === 'Help') {
                return (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                      className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                      <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${helpDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {helpDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          {HELP_MENU_ITEMS.map((helpItem) => (
                            helpItem.isExternal ? (
                              <a
                                key={helpItem.name}
                                href={helpItem.href}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                onClick={() => setHelpDropdownOpen(false)}
                              >
                                {helpItem.name}
                              </a>
                            ) : (
                              <Link
                                key={helpItem.name}
                                href={helpItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                onClick={() => setHelpDropdownOpen(false)}
                              >
                                {helpItem.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center flex-shrink-0 ml-2">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.name === 'Help') {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {item.name}
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${helpDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {helpDropdownOpen && (
                        <div className="pl-4 space-y-1 mt-1">
                          {HELP_MENU_ITEMS.map((helpItem) => {
                            if (helpItem.isExternal) {
                              return (
                                <a
                                  key={helpItem.name}
                                  href={helpItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  className="block px-3 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors active:bg-gray-100"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setHelpDropdownOpen(false);
                                  }}
                                >
                                  {helpItem.name}
                                </a>
                              );
                            }
                            
                            return (
                              <Link
                                key={helpItem.name}
                                href={helpItem.href}
                                className="block px-3 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors active:bg-gray-100"
                              >
                                {helpItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
