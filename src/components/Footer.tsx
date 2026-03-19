'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { transitionBase, viewportOnce } from '@/lib/motion';

export function Footer() {
  const reduceMotion = useReducedMotion();
  const t = reduceMotion ? { duration: 0 } : transitionBase;

  return (
    <footer className="overflow-hidden border-t border-gray-200 bg-white">
      <div className="container">
        <div className="py-[60px] flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={t}
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
                href="https://bellagent.ai/calendly"
                target="_blank"
                rel="noopener noreferrer"
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
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...t, delay: reduceMotion ? 0 : 0.1 }}
          >
            <p className="font-extralight text-sm leading-5 text-gray-900 text-center md:text-left">
              <span className="font-semibold">Interested in learning more?</span> Chat with the Bellagent team
            </p>
            <div className="w-full flex flex-wrap items-center justify-between gap-3 mt-5">
              <Link
                href="https://bellagent.ai/calendly"
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn border-btn gray v2"
              >
                Schedule a demo here
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-gray-200 py-6"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...t, delay: reduceMotion ? 0 : 0.06 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-sm text-gray-500">
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
                  className="w-full grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100"
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
                  className="w-full grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
