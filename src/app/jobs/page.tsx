import Link from 'next/link';
import { JOBS } from '@/lib/jobs';

export default function JobsPage() {
  return (
    <div className="bg-pattern min-h-screen">
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-bellagent-dark sm:text-5xl">
            Open roles at <span className="gradient-text">Bellagent</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Join us in building the future of AI-powered business operations. Find a role that fits your skills and ambitions.
          </p>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl px-4 pb-24 lg:px-6">
        <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
          {JOBS.map((job) => (
            <li key={job.id}>
              <Link
                href={`/jobs/${job.id}`}
                className="flex flex-row items-center justify-between gap-4 p-6 transition-colors hover:bg-bellagent-lavender/30"
              >
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-bellagent-dark">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {job.department} · {job.workMode} · {job.type}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {job.locations.join(' · ')}
                  </p>
                </div>
                <span className="flex-shrink-0 whitespace-nowrap text-sm font-medium text-bellagent-purple">
                  View role →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t see a fit?{' '}
          <a
            href="https://bellagent.ai/calendly"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-bellagent-purple hover:underline"
          >
            Get in touch
          </a>{' '}
          and we&apos;ll keep you in mind for future openings.
        </p>
      </section>
    </div>
  );
}
