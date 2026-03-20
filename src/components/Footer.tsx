'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { transitionBase } from '@/lib/motion';

export function Footer() {
  const reduceMotion = useReducedMotion();
  const t = reduceMotion ? { duration: 0 } : transitionBase;

  return (
    <footer className="border-t border-gray-200 bg-white overflow-x-hidden">
      <div className="container pb-2">
        <div className="py-[60px] flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...t, delay: reduceMotion ? 0 : 0.04 }}
          >
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/data/bellagent-logo.svg"
                alt="Bellagent"
                width={139}
                height={24}
                className="max-w-[140px] block"
              />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 mt-7">
              <Link
                href="mailto:contactus@workatbellagent.com"
                className="font-semibold text-base leading-6 text-gray-600 hover:text-[var(--brand-700)]"
              >
                Contact
              </Link>
              <Link
                href="/jobs"
                className="font-semibold text-base leading-6 text-gray-600 hover:text-[var(--brand-700)]"
              >
                Careers
              </Link>
              <Link
                href="/about"
                className="font-semibold text-base leading-6 text-gray-600 hover:text-[var(--brand-700)]"
              >
                About
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...t, delay: reduceMotion ? 0 : 0.1 }}
          >
            <p className="font-extralight text-sm leading-5 text-gray-900 text-center md:text-left">
              <span className="font-semibold">Interested in learning more?</span> Chat with the Bellagent team
            </p>
            <div className="w-full flex flex-wrap items-center justify-between gap-3 mt-5">
              <Link href="mailto:contactus@workatbellagent.com" className="site-btn border-btn gray v2">
                Schedule a demo here
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 pt-8 pb-10 sm:pb-12"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t, delay: reduceMotion ? 0 : 0.16 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Bellagent. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/BellagentAI"
                className="flex items-center justify-between bg-transparent cursor-pointer w-[24px] h-[24px]"
                aria-label="X (Twitter)"
              >
                <Image
                  src="/data/social-icon-x.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full filter grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100 dark:filter dark:brightness-0 dark:invert dark:hover:filter-none"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/bellagent/"
                className="flex items-center justify-between bg-transparent cursor-pointer w-[24px] h-[24px]"
                aria-label="LinkedIn"
              >
                <Image
                  src="/data/social-icon-linkdin.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full filter grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100 dark:filter dark:brightness-0 dark:invert dark:hover:filter-none"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
