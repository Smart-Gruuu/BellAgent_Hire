'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  jobId: string;
  jobTitle: string;
  jobLocations: string[];
  jobWorkMode: string;
  jobType: string;
};

export function JobApplyModal({
  jobId,
  jobTitle,
  jobLocations,
  jobWorkMode,
  jobType,
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [origin, setOrigin] = useState<string>('');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [linkedinOrWebsite, setLinkedinOrWebsite] = useState('');
  const [coverMessage, setCoverMessage] = useState('');

  const [error, setError] = useState<string | null>(null);

  const toEmail = 'nicegru6@gmail.com';

  const jobSummary = useMemo(() => {
    return `${jobTitle}\n${jobWorkMode} · ${jobType}\n${jobLocations.join(' · ')}`;
  }, [jobLocations, jobTitle, jobType, jobWorkMode]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg bg-bellagent-purple px-6 py-3 text-base font-medium text-white hover:bg-bellagent-purple-light transition-colors"
        onClick={() => setOpen(true)}
      >
        Apply for this role
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${jobTitle}`}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          />

          <div className="relative w-full max-w-2xl mx-4 rounded-xl border border-gray-200/80 bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-bellagent-dark">
                  Apply for {jobTitle}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Submitting will send your application to{' '}
                  <span className="font-medium text-bellagent-purple">{toEmail}</span>.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 w-9 h-9"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <span aria-hidden className="text-gray-500 text-xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <form
              className="mt-6 space-y-4"
              action={`https://formsubmit.co/${toEmail}`}
              method="POST"
              onSubmit={(e) => {
                setError(null);
                const trimmedName = fullName.trim();
                const trimmedEmail = email.trim();
                const trimmedMessage = coverMessage.trim();

                if (!trimmedName) {
                  e.preventDefault();
                  setError('Full name is required.');
                  return;
                }
                if (!trimmedEmail) {
                  e.preventDefault();
                  setError('Email is required.');
                  return;
                }
                if (!trimmedMessage) {
                  e.preventDefault();
                  setError('A short message is required.');
                  return;
                }

                setSubmitting(true);
              }}
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value={`Bellagent application: ${jobTitle}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={`${origin || ''}/jobs/${jobId}?applyStatus=sent`}
              />
              <input type="hidden" name="Job ID" value={jobId} />
              <input type="hidden" name="Job Title" value={jobTitle} />
              <input type="hidden" name="Work Mode" value={jobWorkMode} />
              <input type="hidden" name="Job Type" value={jobType} />
              <input
                type="hidden"
                name="Job Locations"
                value={jobLocations.join(' · ')}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Full name *</span>
                  <input
                    name="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Email *</span>
                  <input
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Phone</span>
                  <input
                    name="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60"
                    placeholder="+1 (555) 123-4567"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Location</span>
                  <input
                    name="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60"
                    placeholder="City, Country"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-gray-700">LinkedIn / Website</span>
                <input
                  name="LinkedIn / Website"
                  value={linkedinOrWebsite}
                  onChange={(e) => setLinkedinOrWebsite(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60"
                  placeholder="https://linkedin.com/in/…"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium text-gray-700">
                  Description / Cover message *
                </span>
                <textarea
                  name="Description / Cover message"
                  value={coverMessage}
                  onChange={(e) => setCoverMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-bellagent-purple/60 min-h-[120px] resize-none"
                  placeholder="A short note about your background, interest, and why you're a great fit."
                  required
                />
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-bellagent-purple px-6 py-3 text-base font-medium text-white hover:bg-bellagent-purple-light transition-colors"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting…' : 'Submit application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

