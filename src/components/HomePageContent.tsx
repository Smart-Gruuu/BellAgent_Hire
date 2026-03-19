'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { transitionBase, viewportOnce } from '@/lib/motion';

export function HomePageContent() {
  const reduceMotion = useReducedMotion();

  const t = reduceMotion ? { duration: 0 } : transitionBase;
  const heroEase = reduceMotion ? { duration: 0 } : { ...transitionBase, duration: 0.5 };

  return (
    <main className="min-h-[80vh]">
      <motion.div
        className="bg-cover bg-[bottom_center] bg-no-repeat bg-[#FAFAFA] min-h-[60vh]"
        style={{ backgroundImage: "url('/data/home-bg.jpg')" }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t}
      >
        <div className="container flex flex-col items-center pt-10 md:pt-20 lg:pt-30 pb-15 relative z-10">
          <motion.h2
            className="text-center text-gray-900 text-[30px] sm:text-[42px] md:text-[60px] leading-[38px] sm:leading-[54px] md:leading-[72px] font-medium"
            initial={reduceMotion ? false : { opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroEase, delay: reduceMotion ? 0 : 0.06 }}
          >
            Build the future of{' '}
            <span className="text-brand-gradient-600">AI-powered operations.</span>
          </motion.h2>
          <motion.span
            className="text-[14px] sm:text-[20px] text-center text-gray-600 mt-4 max-w-[768px] mx-auto"
            initial={reduceMotion ? false : { opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroEase, delay: reduceMotion ? 0 : 0.12 }}
          >
            Join Bellagent and help scale teams through powerful automation—made simple for everyday operators.
          </motion.span>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroEase, delay: reduceMotion ? 0 : 0.18 }}
          >
            <Link href="/jobs" className="site-btn md w-full sm:w-auto">
              View Open Roles
            </Link>
            <Link href="/about" className="site-btn border-btn gray v2 w-full sm:w-auto">
              About Us
            </Link>
          </motion.div>
          <motion.p
            className="font-normal text-sm leading-5 text-[#535862] mt-10"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...heroEase, delay: reduceMotion ? 0 : 0.26 }}
          >
            Interested in learning more?{' '}
            <Link
              href="https://bellagent.ai/calendly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-600)] hover:underline font-semibold"
            >
              Schedule A Demo Today
            </Link>
          </motion.p>
        </div>
      </motion.div>

      <div className="py-[60px] md:py-[90px]">
        <div className="container">
          <motion.h3
            className="text-gray-600 text-[18px] leading-[24px] font-medium text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={t}
          >
            <span className="hidden md:inline-block">Trusted By Companies Adopting Modern AI Operations</span>
            <span className="md:hidden">Trusted By</span>
          </motion.h3>
          <div className="relative flex md:hidden overflow-hidden mt-8">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"
              aria-hidden
            />
            <motion.div
              className="flex animate-loop whitespace-nowrap gap-x-5 gap-y-3 sm:gap-7 flex-nowrap"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={t}
            >
              <div className="company-logos flex flex-shrink-0 flex-nowrap">
                <LogoStrip />
              </div>
              <div className="company-logos flex flex-shrink-0 flex-nowrap">
                <LogoStrip />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="company-logos !hidden md:!flex mt-8"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: reduceMotion ? 0 : 0.05 },
              },
            }}
          >
            <motion.span
              className="company-logo-box"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <Image src="/data/enova.svg" alt="Enova" width={133} height={40} className="h-10 w-auto block" />
            </motion.span>
            <motion.span
              className="company-logo-box"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <Image src="/data/iManage.webp" alt="iManage" width={145} height={40} className="h-10 w-auto block" />
            </motion.span>
            <motion.span
              className="company-logo-box"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <Image src="/data/staffbase.svg" alt="Staffbase" width={170} height={40} className="h-10 w-auto block" />
            </motion.span>
            <motion.span
              className="company-logo-box"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <Image src="/data/jrk.webp" alt="JRK" width={130} height={40} className="h-10 w-auto block" />
            </motion.span>
            <motion.span
              className="company-logo-box"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <Image src="/data/workable.webp" alt="Workable" width={168} height={40} className="h-10 w-auto block" />
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-brand-25"
        initial={reduceMotion ? false : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={t}
      >
        <div className="container">
          <div className="w-full py-[60px] md:py-[90px]">
            <motion.h2
              className="text-center text-gray-900 text-[30px] sm:text-[32px] md:text-[36px] leading-[38px] sm:leading-[40px] md:leading-[44px] font-medium mb-6"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...t, delay: reduceMotion ? 0 : 0.08 }}
            >
              Deploy instantly. <span className="text-brand-gradient-600">Save Money.</span> Secure Your Systems.
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start flex-wrap -m-4 pt-7 text-gray-600 text-center"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: reduceMotion ? 0 : 0.12 },
                },
              }}
            >
              <motion.div
                className="w-full md:w-1/3 p-4"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: t },
                }}
              >
                <div className="bg-brand-50 rounded-[16px] overflow-hidden">
                  <Image src="/data/ready-to-run-agents.svg" alt="" width={384} height={256} className="w-full h-auto" />
                </div>
                <div className="mt-5">
                  <h4 className="text-[20px] leading-[30px] font-semibold text-gray-900">Ready-to-Run AI Agents</h4>
                  <p className="text-[16px] leading-[24px] mt-4">
                    Launch faster with prebuilt frameworks designed around real industry workflows.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/3 p-4"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: t },
                }}
              >
                <div className="bg-brand-50 rounded-[16px] overflow-hidden">
                  <Image src="/data/zero-touch-integrations.svg" alt="" width={384} height={256} className="w-full h-auto" />
                </div>
                <div className="mt-5">
                  <h4 className="text-[20px] leading-[30px] font-semibold text-gray-900">Zero-touch Integrations</h4>
                  <p className="text-[16px] leading-[24px] mt-4">
                    Connect instantly with thousands of apps, defaulting to your compliance on day one.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/3 p-4"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: t },
                }}
              >
                <div className="bg-brand-50 rounded-[16px] overflow-hidden">
                  <Image src="/data/control-view.svg" alt="" width={384} height={256} className="w-full h-auto" />
                </div>
                <div className="mt-5">
                  <h4 className="text-[20px] leading-[30px] font-semibold text-gray-900">Control View</h4>
                  <p className="text-[16px] leading-[24px] mt-4">
                    Your command center for system security, visibility, and control.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="py-[60px] md:py-[90px]">
        <div className="container">
          <motion.div
            className="w-full max-w-[768px] mb-12"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={t}
          >
            <h2 className="font-semibold text-3xl md:text-4xl leading-[42px] md:leading-[44px] text-gray-900">
              Why join Bellagent?
            </h2>
            <h4 className="font-normal text-xl leading-[30px] text-gray-600 mt-4">
              We deliver ready-to-run AI Agents that automate the work your team depends on—so productivity never stalls
              and high-value work always moves forward.
            </h4>
          </motion.div>
          <motion.div
            className="flex flex-wrap -mx-3"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: reduceMotion ? 0 : 0.06 },
              },
            }}
          >
            <motion.div
              className="flex flex-col p-3 w-full md:w-1/2 lg:w-1/3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <div className="flex flex-col p-3 pl-6 pr-0 border-l-[4px] border-l-gray-100">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Reliable Performance</h3>
                <p className="text-base leading-6 text-gray-600 font-normal mt-1.5">
                  Bellagent delivers consistent, high-trust automation that scales with you. AI Agents stay online, accurate,
                  and auditable across every workflow.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col p-3 w-full md:w-1/2 lg:w-1/3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <div className="flex flex-col p-3 pl-6 pr-0 border-l-[4px] border-l-gray-100">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Maximize Productivity</h3>
                <p className="text-base leading-6 text-gray-600 font-normal mt-1.5">
                  Turn simple and complex workflows into self-running systems. Bellagent handles everything from routine
                  tasks to deep reasoning and decisions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col p-3 w-full md:w-1/2 lg:w-1/3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: t },
              }}
            >
              <div className="flex flex-col p-3 pl-6 pr-0 border-l-[4px] border-l-gray-100">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Remove Blockers</h3>
                <p className="text-base leading-6 text-gray-600 font-normal mt-1.5">
                  From lead intake to support tickets, Bellagent connects your apps and automates handoffs in real time so
                  progress flows and teams move faster.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-cover bg-[right_center] bg-no-repeat bg-[#F2F2FF]"
        style={{ backgroundImage: "url('/data/notice-footer-bg.png')" }}
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={t}
      >
        <div className="container py-[50px]">
          <div className="flex flex-col items-center md:items-start w-full max-w-[728px] text-center md:text-left">
            <h2 className="font-semibold text-[28px] md:text-[30px] leading-[36px] md:leading-[38px] text-gray-900">
              Launch Ready-to-Run AI Agents in minutes
            </h2>
            <h4 className="font-normal text-xl leading-[30px] text-gray-600 mt-2">
              From research to real time lead conversion, Bellagent automates the busy work so you can focus on growing
              your business.
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
              <Link href="https://bellagent.ai" target="_blank" rel="noopener noreferrer" className="site-btn md">
                Learn about Bellagent
              </Link>
              <Link href="/jobs" className="site-btn border-btn md gray v3">
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

function LogoStrip() {
  return (
    <>
      <span className="company-logo-box">
        <Image src="/data/enova.svg" alt="Enova" width={133} height={40} className="h-10 w-auto block" />
      </span>
      <span className="company-logo-box">
        <Image src="/data/iManage.webp" alt="iManage" width={145} height={40} className="h-10 w-auto block" />
      </span>
      <span className="company-logo-box">
        <Image src="/data/staffbase.svg" alt="Staffbase" width={170} height={40} className="h-10 w-auto block" />
      </span>
      <span className="company-logo-box">
        <Image src="/data/jrk.webp" alt="JRK" width={130} height={40} className="h-10 w-auto block" />
      </span>
      <span className="company-logo-box">
        <Image src="/data/workable.webp" alt="Workable" width={168} height={40} className="h-10 w-auto block" />
      </span>
    </>
  );
}
