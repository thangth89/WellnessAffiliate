'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS, HELP_MENU_ITEMS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopHelpOpen, setDesktopHelpOpen] = useState(false);
  const [mobileHelpOpen, setMobileHelpOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // đóng dropdown desktop khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopHelpOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // đóng menu khi đổi route
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHelpOpen(false);
    setDesktopHelpOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink min-w-0">
            <p className="text-lg sm:text-2xl font-bold text-emerald-600 truncate">
              GoWellnessUnlocked<span className="text-gray-700">.com</span>
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.name === 'Help') {
                return (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopHelpOpen(!desktopHelpOpen)}
                      className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform ${desktopHelpOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {desktopHelpOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          {HELP_MENU_ITEMS.map((helpItem) =>
                            helpItem.isExternal ? (
                              <a
                                key={helpItem.name}
                                href={helpItem.href}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => setDesktopHelpOpen(false)}
                              >
                                {helpItem.name}
                              </a>
                            ) : (
                              <Link
                                key={helpItem.name}
                                href={helpItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => setDesktopHelpOpen(false)}
                              >
                                {helpItem.name}
                              </Link>
                            )
                          )}
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
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                        onClick={() => setMobileHelpOpen(!mobileHelpOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${mobileHelpOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileHelpOpen && (
                        <div className="pl-4 space-y-1 mt-1">
                          {HELP_MENU_ITEMS.map((helpItem) =>
                            helpItem.isExternal ? (
                              <a
                                key={helpItem.name}
                                href={helpItem.href}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 rounded-md"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileHelpOpen(false);
                                }}
                              >
                                {helpItem.name}
                              </a>
                            ) : (
                              <Link
                                key={helpItem.name}
                                href={helpItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 rounded-md"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileHelpOpen(false);
                                }}
                              >
                                {helpItem.name}
                              </Link>
                            )
                          )}
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
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
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
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
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
