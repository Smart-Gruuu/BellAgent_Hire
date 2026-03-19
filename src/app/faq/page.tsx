'use client';

import { useState, useMemo, type ReactNode } from 'react';
import Image from 'next/image';

const FAQ_ITEMS: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: 'faq-1',
    question: 'What is Bellagent?',
    answer: (
      <ul>
        <li>AI Agent builder for business operators</li>
        <li>Turns your existing processes into AI-powered workflows</li>
        <li>Helps teams move faster and reduce manual work</li>
        <li>Improves customer and internal experience without needing a large engineering team</li>
      </ul>
    ),
  },
  {
    id: 'faq-2',
    question: 'Who is Bellagent built for?',
    answer: (
      <ul>
        <li>Operators and business operations teams</li>
        <li>Revenue leaders (sales/rev ops)</li>
        <li>Support and CX teams</li>
        <li>Business owners who need AI but don&apos;t have a big technical team</li>
        <li>Anyone who understands the work and workflows and wants to build/manage agents themselves</li>
      </ul>
    ),
  },
  {
    id: 'faq-3',
    question: "What if the integration I need isn't available yet?",
    answer: (
      <ul>
        <li>You can schedule a call with our sales team to review your use case and stack</li>
        <li>We&apos;ll scope a custom integration if it&apos;s not available out of the box</li>
        <li>Many integrations can go live in ~48 hours or less, depending on complexity</li>
        <li>Goal: you&apos;re not blocked from deploying agents where they matter most</li>
      </ul>
    ),
  },
  {
    id: 'faq-4',
    question: 'What kinds of work can Bellagent agents handle?',
    answer: (
      <ul>
        <li>Simple workflows (e.g., routing, notifications, basic updates)</li>
        <li>More sophisticated workflows requiring multi-step logic</li>
        <li>Triage and route tickets</li>
        <li>Qualify leads and prioritize follow-ups</li>
        <li>Draft personalized outreach and responses</li>
        <li>Read from and update systems of record (CRMs, help desks, etc.)</li>
        <li>Handle tasks that require deeper reasoning, not just basic automation</li>
      </ul>
    ),
  },
  {
    id: 'faq-5',
    question: 'Do I need developers to set up Bellagent?',
    answer: (
      <ul>
        <li>No developers required for core setup and iteration</li>
        <li>
          Non-technical teams:
          <ul>
            <li>Choose triggers</li>
            <li>Connect tools</li>
            <li>Define guardrails and instructions in plain language</li>
          </ul>
        </li>
        <li>Bellagent manages AI + orchestration behind the scenes</li>
        <li>Technical teams can still extend and customize if desired</li>
      </ul>
    ),
  },
  {
    id: 'faq-6',
    question: 'How are AI credits calculated and what if I use more than planned?',
    answer: (
      <ul>
        <li>
          Credits are based on:
          <ul>
            <li>The model type (more powerful models use more credits)</li>
            <li>The amount of data processed and generated (larger payloads = more credits)</li>
          </ul>
        </li>
        <li>
          To reduce usage, you can:
          <ul>
            <li>Switch to a more cost-efficient model</li>
            <li>Send less data into the model</li>
          </ul>
        </li>
        <li>
          Easiest optimization:
          <ul>
            <li>Trim unnecessary context (e.g., large attachments, non-essential CRM fields)</li>
          </ul>
        </li>
        <li>
          If usage starts to exceed expectations:
          <ul>
            <li>You&apos;ll see it clearly in your workspace</li>
            <li>You can adjust workflows or your plan before it becomes a surprise</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: 'faq-7',
    question: 'How does Bellagent connect to my existing tools?',
    answer: (
      <ul>
        <li>Connect apps directly inside Bellagent with guided, no-code setup</li>
        <li>
          Once connected, agents can:
          <ul>
            <li>Read from your tools</li>
            <li>Write back updates and actions</li>
          </ul>
        </li>
        <li>Works with tools like CRMs, help desks, communication platforms, and more</li>
        <li>Get AI value without rebuilding your existing stack</li>
      </ul>
    ),
  },
  {
    id: 'faq-8',
    question: 'How do I stay in control of what the agents do?',
    answer: (
      <ul>
        <li>
          You define:
          <ul>
            <li>Where agents are allowed to act</li>
            <li>What data they can access</li>
            <li>When they must request human review</li>
          </ul>
        </li>
        <li>Start with stricter oversight and approval flows</li>
        <li>Gradually increase autonomy as agents prove reliable</li>
        <li>
          You can always:
          <ul>
            <li>Pause agents</li>
            <li>Roll back changes</li>
            <li>Refine instructions at any time</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: 'faq-9',
    question: 'How do we measure the impact of Bellagent?',
    answer: (
      <ul>
        <li>See what each agent is doing in your workspace</li>
        <li>
          Track:
          <ul>
            <li>Volume of work handled</li>
            <li>Time saved</li>
            <li>Key outputs and outcomes</li>
          </ul>
        </li>
        <li>
          Makes it easier to:
          <ul>
            <li>Report on ROI</li>
            <li>Identify what to tune next</li>
            <li>Prove the value of AI across your team</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: 'faq-10',
    question: 'How do we get started with Bellagent?',
    answer: (
      <ul>
        <li>Pick a single, high-impact workflow to start</li>
        <li>Define the trigger (signal) that should start the workflow</li>
        <li>Link your apps and configure a ready-to-run template</li>
        <li>Test safely before launch</li>
        <li>Gather feedback from operators using it</li>
        <li>Move the agent into production once results look solid</li>
      </ul>
    ),
  },
];

function TogglePlusIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-auto transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return FAQ_ITEMS;
    const q = search.toLowerCase();
    return FAQ_ITEMS.filter((item) => item.question.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="min-h-[80vh]">
      <div className="container sm-container py-15">
        <h1 className="page-title text-center">FAQ</h1>

        <div className="flex flex-col items-center mt-8 mb-8 space-y-6">
          <div className="relative w-[500px] max-w-full">
            <button
              type="button"
              className="absolute top-0 left-0 w-10 h-full flex justify-center items-center z-0 pointer-events-none"
              aria-hidden
              tabIndex={-1}
            >
              <Image src="/data/search-icon.svg" alt="" width={20} height={20} className="!w-5 !h-auto" />
            </button>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-field search-input !pl-10 relative z-[1]"
              aria-label="Search FAQs"
            />
          </div>
        </div>

        <div>
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                id={item.id}
                key={item.id}
                className="[&:not(:last-child)]:border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex items-center cursor-pointer py-5 w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <h3 className="text-gray-900 text-[16px] leading-[24px] font-semibold">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                    <span className="inline-flex p-2">
                      <TogglePlusIcon open={isOpen} />
                    </span>
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-answer pl-0 pr-12">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center font-semibold">
          Showing {filtered.length} FAQ{filtered.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
