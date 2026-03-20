import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Our Mission */}
      <div className="py-[60px] md:py-[90px]">
        <div className="container">
          <div className="flex flex-col items-center w-[840px] max-w-full mx-auto">
            <h2 className="inner-page-title !text-center">Our Mission</h2>
          </div>
        </div>
      </div>

      {/* Mission statement */}
      <div className="py-[60px] md:py-[90px] bg-brand-25">
        <div className="container">
          <span className="flex flex-col gap-1 items-center text-gray-900 text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] font-normal text-center">
            We are on a mission to democratize AI for the everyday operator to{' '}
            <span className="text-brand-gradient-600">Deploy instantly. Save Money. Secure Their Systems.</span>
          </span>
        </div>
      </div>

      {/* About Bellagent */}
      <div className="py-[60px] md:py-[90px]">
        <div className="container">
          <h2 className="section-tl sm:text-center">About Bellagent</h2>
          <div className="flex flex-col gap-4 text-gray-600 text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-left mt-7">
            <p>
              Bellagent is an enterprise-level AI Agent platform built to automate everyday business operations with zero-touch integrations that connect instantly to more than 1,300 applications. Launched in 2025 by Proactifi Inc., and headquartered in Chicago, the platform is built for practicality with industry-leading compliance and security standards, enabling organizations to deploy AI Agents without friction from day one.
            </p>
            <p>
              Bellagent&apos;s mission to make powerful, enterprise-level AI practical and accessible is helping businesses of all sizes operate smarter, serve customers better and compete in an AI-driven economy.
            </p>
          </div>
        </div>
      </div>

      {/* A note from our Founder & CEO */}
      <div className="pt-[30px] pb-[60px] md:pb-[90px]">
        <div className="container">
          <h2 className="section-tl sm:text-center">A note from our Founder &amp; CEO</h2>
          <div className="flex flex-col gap-4 text-gray-600 text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-left mt-7">
            <p>
              When I started Bellagent, the goal was simple: bring modern AI to the businesses that haven&apos;t traditionally leaned into technology. For too long tools were built for technical teams and massive enterprises, while the people who needed to leverage innovation the most such as operators, sellers, and business leaders, were getting the least from the shift into the era of Artificial Intelligence.
            </p>
            <p>
              Our focus isn&apos;t AI that replaces judgment, but AI that amplifies it. Not tools that abstract the business away, but tools that give teams more control, visibility, and adaptability at the efficiency of the most tech-forward companies. We share the same goal as our customers, get from ideas to impact fast, and bring their teams with them.
            </p>
            <p>
              I often tell our customers:{' '}
              <span className="text-brand-gradient-600">
                &quot;Bellagent turns AI into something practical you can depend on every day. Our customers are leaders who see modern AI not just as an opportunity, but as a responsibility to their teams, their customers, and the businesses they&apos;re building. Standing still is no longer neutral; in a world compounding this fast, choosing not to use AI is choosing to fall behind.&quot;
              </span>
            </p>
            <p>
              That belief is what drives us. Bellagent is becoming the infrastructure layer for modern business technology. We offer an onramp for those who feel behind, and a way for every company to adapt faster than the world around them. We&apos;re here so you can move first, move fast, and turn this technological wave into tangible progress your team and your customers can feel every day.
            </p>
          </div>

          {/* Founder block */}
          <div className="flex flex-col items-center mt-20 md:mt-30">
            <span className="w-[160px] md:w-[204px] h-auto rounded-full overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-black/[0.08] before:rounded-full before:box-border">
              <Image
                src="/data/andrew-pekin.webp"
                alt="Andrew Pekin"
                width={204}
                height={204}
                className="!w-full max-w-full !h-auto rounded-full"
              />
            </span>
            <span className="text-gray-900 text-[20px] leading-[30px] font-semibold text-center mt-4">Andrew Pekin</span>
            <span className="text-brand-700 text-[18px] leading-[28px] text-center mt-1">Founder &amp; CEO</span>
            <span className="text-gray-600 text-[18px] leading-[28px] text-center mt-1">
              Get in touch via email at{' '}
              <a className="text-brand-700 underline hover:no-underline" href="mailto:contactus@workatbellagent.com">
                contactus@workatbellagent.com
              </a>
            </span>
            <div className="flex items-center gap-6 mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-transparent cursor-pointer w-[20px] h-[20px]"
                href="https://www.linkedin.com/company/bellagent/"
                aria-label="LinkedIn"
              >
                <Image src="/data/social-icon-linkdin.svg" alt="" width={20} height={20} className="w-full grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-transparent cursor-pointer w-[20px] h-[20px]"
                href="https://x.com/BellagentAI"
                aria-label="X"
              >
                <Image src="/data/social-icon-x.svg" alt="" width={20} height={20} className="w-full grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100" />
              </a>
            </div>
            <Link className="site-btn border-btn gray v2 mt-8" href="/about/andrewpekin">
              Read Bio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
