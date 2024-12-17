"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      href: "/shop",
      dropdown: [
        { name: "Categories", href: "/productlist" },
        { name: "Products", href: "/productview" },
        { name: "Pricing", href: "/pricing" },
        
      ],
    },
    { name: "About", href: "/about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "/contact" },
    { name: "Pages", href: "/pages" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <header className="font-montserrat relative z-50 text-gray-700 text-sm font-bold">
      <div className="flex items-center justify-between py-3 px-4 sm:px-10 bg-white relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Bandage.png"
            alt="logo"
            width={108}
            height={24}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  onClick={toggleShopDropdown}
                  className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 transition"
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-4 h-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && isShopDropdownOpen && (
                <div className="shop-dropdown absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="flex items-center text-blue-500 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-1"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-sm">Login/Register</span>
          </Link>

          <Link href="/search" className="hover:text-blue-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </Link>

          <Link
            href="/wishlist"
            className="relative hover:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full left-0 top-20 py-4 shadow-md">
          <nav className="flex flex-col items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="text-gray-600 text-xl font-semibold py-2 cursor-pointer"
                    onClick={toggleShopDropdown}
                  >
                    {item.name}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 text-xl font-semibold py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && isShopDropdownOpen && (
                  <div className="shop-dropdown absolute left-0 mt-2 w-full bg-white shadow-md border rounded-md">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsShopDropdownOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Additional Mobile Icons */}
          <div className="flex flex-col items-center mt-4">
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-600 mb-4"
            >
              Login/Register
            </Link>
            <div className="flex space-x-4">
              <Link href="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 hover:text-blue-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </Link>
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 hover:text-blue-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </Link>
              <Link href="/wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 hover:text-blue-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
