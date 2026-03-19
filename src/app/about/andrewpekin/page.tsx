import Image from 'next/image';
import Link from 'next/link';

export default function AndrewPekinPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero: name + title */}
      <div className="py-[60px] md:py-[90px]">
        <div className="container">
          <div className="flex flex-col items-center w-[840px] max-w-full mx-auto">
            <h2 className="inner-page-title !text-center">Andrew Pekin</h2>
            <span className="text-gray-900 text-center text-[24px] min-[480px]:text-[26px] sm:text-[30px] md:text-[36px] leading-[30px] min-[480px]:leading-[36px] sm:leading-[40px] md:leading-[44px] font-normal mt-4 sm:mt-5">
              Founder &amp; CEO
            </span>
          </div>
        </div>
      </div>

      {/* Two-column: bio text + sticky sidebar */}
      <div className="pb-[60px] md:pb-[90px]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-10 lg:gap-15">
            {/* Bio content */}
            <div className="w-full flex-1">
              <div className="flex flex-col gap-4 text-gray-600 text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-left mt-7">
                <p>
                  <strong>Andrew Pekin</strong> is the Founder and CEO of{' '}
                  <a
                    className="underline hover:no-underline hover:text-[var(--brand-500)] transition-all duration-300"
                    href="https://www.bellagent.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bellagent.ai
                  </a>
                  , an enterprise AI Agent platform built for everyday business operators.
                </p>
                <p>
                  With a career dedicated to helping organizations scale through practical technology, disciplined execution and customer-focused innovation, Andrew built his leadership foundation in high-growth B2B SaaS environments, holding senior, customer-facing roles across enterprise organizations.
                </p>
                <p>
                  His experience in helping startups launch into new markets and scale from pre-revenue to multi-million-dollar growth through product-led GTM execution led him to found Proactifi (2023) and Bellagent (2025).
                </p>
                <p>
                  At Proactifi, he began building AI-driven SaaS products, starting with a procurement platform. As agentic AI rapidly matured, he recognized a larger opportunity: enabling operators, revenue teams, and traditional business leaders to harness AI in a practical, trustworthy way at a time when organizations are expected to do more with less. That insight became <strong>Bellagent</strong>.
                </p>
                <p>
                  In 2025, Andrew launched Bellagent to transform real customer experience insights into scalable, productized AI solutions. The platform delivers ready-to-run AI frameworks that integrate across more than 1,300 software systems, giving companies practical AI they can deploy with confidence without requiring deep technical expertise.
                </p>
                <p>
                  Backed by leading Chicago investors, Bellagent is built to serve as durable business infrastructure that drives engagement, reduces churn and expands lifetime value.
                </p>
                <p>
                  Under Andrew&apos;s leadership, Bellagent has grown to a team of 25, delivering enterprise-grade capability without complexity. The company recently launched its latest version, making AI Agents more accessible to business operators than ever before.
                </p>
                <p>
                  &quot;At Bellagent, we look beyond what customers say they want to understand what they truly need,&quot; Andrew says. &quot;We start with high-impact frameworks that plug directly into a sustainable operating model.&quot;
                </p>
                <p>
                  Prior to Bellagent, he led new business strategy at Built In and Firstup (formerly SocialChorus &amp; Dynamic Signal), where he drove significant revenue growth and played a key role in scaling the company beyond $100M in ARR through strategic engagements with <strong>Fortune 500</strong> clients including: CME Group, U.S. Bank, ServiceNow, Dropbox, and CrowdStrike.
                </p>
                <p>
                  Throughout his career, he developed a reputation for operational excellence, data-driven decision making, and building high-performing teams that deliver measurable results.
                </p>
                <p>
                  A graduate of Indiana University, Andrew is based in Chicago with his wife, Lindsey, and their dog, Luca.
                </p>
              </div>
            </div>

            {/* Sidebar: photo + contact */}
            <div className="w-full md:max-w-[32%] lg:max-w-[40%] flex flex-col items-center">
              <div className="flex flex-col items-center w-full md:sticky md:top-0">
                <span className="w-[340px] md:w-[386px] max-w-full h-auto rounded-full overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-black/[0.08] before:rounded-full before:box-border">
                  <Image
                    src="/data/andrew-pekin.webp"
                    alt="Andrew Pekin"
                    width={386}
                    height={386}
                    className="!w-full max-w-full !h-auto rounded-full"
                  />
                </span>
                <span className="text-gray-900 text-[20px] leading-[30px] font-semibold text-center mt-4">Andrew Pekin</span>
                <span className="text-brand-700 text-[18px] leading-[28px] text-center mt-1">Founder &amp; CEO</span>
                <span className="text-gray-600 text-[18px] leading-[28px] text-center mt-1">
                  Get in touch via email at{' '}
                  <a className="text-brand-700 underline hover:no-underline" href="mailto:contactus@bellagent.ai">
                    contactus@bellagent.ai
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
