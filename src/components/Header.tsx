'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--background)]"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="mx-auto flex h-[5.125rem] max-w-7xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            <Image
              src="/data/bellagent-logo.svg"
              alt="Bellagent"
              width={139}
              height={24}
              className="max-w-[140px] block"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-bellagent-dark text-xs ml-auto hover:bg-[var(--accent)] cursor-pointer p-2 rounded-md transition duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
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
            className="h-7 w-auto"
            aria-hidden
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>

        {/* Nav + CTA */}
        <div
          className={`
            flex items-center flex-1 gap-2
            fixed lg:static
            w-[17.5rem] sm:w-[20rem] lg:w-auto
            h-screen lg:h-auto
            bg-[var(--background)] lg:bg-transparent
            shadow-md lg:shadow-none
            p-4 pt-0 lg:p-0
            overflow-auto lg:overflow-visible
            top-0
            z-50
            flex-col lg:flex-row
            transition-[right] duration-500 ease-in-out
            ${mobileOpen ? 'right-0' : '-right-[17.5rem] sm:-right-[20rem] lg:right-0'}
          `}
        >
          <nav className="inline-flex gap-0 text-sm w-full lg:w-auto order-2 lg:order-1">
            <ul className="flex flex-col lg:flex-row flex-1 list-none items-center space-x-1 lg:space-x-1">
              <li className="group m-0 [&:not(:first-child)]:mt-4 lg:[&:not(:first-child)]:m-0 relative w-full lg:w-auto">
                <Link
                  href="/jobs"
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 lg:px-2.5 xl:px-3 py-2 text-gray-700 text-[15px] xl:text-[16px] font-semibold transition duration-300 hover:bg-[var(--accent)]"
                >
                  Open Roles
                </Link>
              </li>
              <li className="group m-0 [&:not(:first-child)]:mt-4 lg:[&:not(:first-child)]:m-0 relative w-full lg:w-auto">
                <Link
                  href="/about"
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 lg:px-2.5 xl:px-3 py-2 text-gray-700 text-[15px] xl:text-[16px] font-semibold transition duration-300 hover:bg-[var(--accent)]"
                >
                  About Us
                </Link>
              </li>
              <li className="group m-0 [&:not(:first-child)]:mt-4 lg:[&:not(:first-child)]:m-0 relative w-full lg:w-auto">
                <Link
                  href="/faq"
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 lg:px-2.5 xl:px-3 py-2 text-gray-700 text-[15px] xl:text-[16px] font-semibold transition duration-300 hover:bg-[var(--accent)]"
                >
                  FAQ
                </Link>
              </li>
              <li className="group m-0 [&:not(:first-child)]:mt-4 lg:[&:not(:first-child)]:m-0 relative w-full lg:w-auto">
                <Link
                  href="https://bellagent.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 lg:px-2.5 xl:px-3 py-2 text-gray-700 text-[15px] xl:text-[16px] font-semibold transition duration-300 hover:bg-[var(--accent)]"
                >
                  bellagent.ai
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap items-center gap-2 lg:ml-auto sticky lg:static top-0 z-[1] bg-[var(--background)] lg:bg-transparent p-4 lg:p-0 -mx-4 lg:m-0 order-1 lg:order-2">
            <Link
              href="/jobs#apply"
              className="site-btn w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md bg-bellagent-purple px-4 py-2 text-white text-[15px] font-semibold transition duration-300 hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop when mobile menu open */}
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
