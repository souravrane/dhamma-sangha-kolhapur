"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "मुख्यपृष्ठ", href: "/" },
    { name: "आमच्याबद्दल", href: "/about" },
    { name: "ब्लॉग", href: "/blogs" },
    { name: "कार्यक्रम", href: "/events" },
    { name: "गॅलरी", href: "/gallery" },
    { name: "संपर्क", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="धम्म संघ कोल्हापूर लोगो"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-serif font-semibold text-cambridge_blue">
                धम्म संघ
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-cambridge_blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/join"
              className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-xl font-medium transition-colors"
            >
              सामील व्हा
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cambridge_blue p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-cambridge_blue block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/join"
                  className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-xl font-medium transition-colors block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  सामील व्हा
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
