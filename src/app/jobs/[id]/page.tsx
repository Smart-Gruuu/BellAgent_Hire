import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJobById } from '@/lib/jobs';
import { JobApplyModal } from '@/components/JobApplyModal';

export default function JobPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const job = getJobById(params.id);
  if (!job) notFound();

  const applyStatus = typeof searchParams?.applyStatus === 'string' ? searchParams?.applyStatus : undefined;

  return (
    <div className="bg-pattern min-h-screen">
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24 lg:px-6">
        <Link
          href="/jobs"
          className="text-sm font-medium text-bellagent-purple hover:underline"
        >
          ← Back to open roles
        </Link>
        {applyStatus === 'sent' && (
          <div className="mt-6 mb-2 rounded-xl border border-bellagent-purple/20 bg-bellagent-lavender/30 p-4 text-bellagent-dark text-sm">
            Application sent successfully. Thank you for your interest in Bellagent.
          </div>
        )}
        <div className="mt-8 rounded-xl border border-gray-200/80 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-bellagent-dark md:text-3xl">
            {job.title}
          </h1>
          <p className="mt-2 text-gray-500">
            {job.workMode} · {job.type}
          </p>
          <p className="mt-0.5 text-sm text-gray-500">
            {job.locations.join(' · ')}
          </p>

          <div className="mt-8 space-y-8 text-gray-600">
            <section>
              <h2 className="text-lg font-semibold text-bellagent-dark">About Bellagent</h2>
              <p className="mt-2 whitespace-pre-line">{job.aboutBellagent}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-bellagent-dark">Role Overview</h2>
              <p className="mt-2 whitespace-pre-line">{job.roleOverview}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-bellagent-dark">Responsibilities</h2>
              <div className="mt-3 space-y-4">
                {job.responsibilities.map((section, i) => (
                  <div key={i}>
                    {section.title && (
                      <h3 className="text-base font-medium text-bellagent-dark mb-2">{section.title}</h3>
                    )}
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {job.whatSuccessLooksLike && job.whatSuccessLooksLike.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-bellagent-dark">What Success Looks Like</h2>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  {job.whatSuccessLooksLike.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className="text-lg font-semibold text-bellagent-dark">Requirements</h2>
              <div className="mt-3 space-y-4">
                {job.requirements.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-base font-medium text-bellagent-dark mb-2">{section.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {job.compensation && (
              <section>
                <h2 className="text-lg font-semibold text-bellagent-dark">Compensation</h2>
                <p className="mt-2 whitespace-pre-line">{job.compensation}</p>
              </section>
            )}

            {job.additionalInformation && (
              <section>
                <h2 className="text-lg font-semibold text-bellagent-dark">Additional Information</h2>
                <p className="mt-2 whitespace-pre-line">{job.additionalInformation}</p>
              </section>
            )}
          </div>

          <div className="mt-10">
            <JobApplyModal
              jobId={job.id}
              jobTitle={job.title}
              jobLocations={job.locations}
              jobWorkMode={job.workMode}
              jobType={job.type}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
