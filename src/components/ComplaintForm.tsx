import { useRef, useState } from 'react';
import { AlertCircle, ImageUp, Loader2, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

const CATEGORIES = [
  'Pothole',
  'Garbage',
  'Water Leak',
  'Streetlight',
  'Safety',
  'General Complaints',
  'Other Civic Complaints',
  'Escalation District Administration',
  'District Administration and Additional DC',
  'District Administration',
];

const SEVERITIES = ['Low', 'Medium', 'High'];

const WEBHOOK_URL = 'https://hook.eu1.make.com/ort45f1jxqkcdoos0dz72x1hqr88k0lh';

type FormState = {
  citizen_name: string;
  citizen_email: string;
  citizen_contact: string;
  category: string;
  severity: string;
  language: string;
  location: string;
  body_text: string;
};

const EMPTY: FormState = {
  citizen_name: '',
  citizen_email: '',
  citizen_contact: '',
  category: '',
  severity: '',
  language: 'English',
  location: '',
  body_text: '',
};

type Errors = Partial<Record<keyof FormState | 'image', string>>;

export default function ComplaintForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setErrors((e) => ({ ...e, image: undefined }));
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.citizen_name.trim()) next.citizen_name = 'Please enter your name.';
    if (!form.citizen_email.trim()) {
      next.citizen_email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.citizen_email.trim())) {
      next.citizen_email = 'Please enter a valid email address.';
    }
    if (!form.citizen_contact.trim()) {
      next.citizen_contact = 'Please enter your mobile number.';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.citizen_contact.trim())) {
      next.citizen_contact = 'Please enter a valid mobile number.';
    }
    if (!form.category) next.category = 'Please select a category.';
    if (!form.severity) next.severity = 'Please select a severity.';
    if (!form.location.trim()) next.location = 'Please enter the location.';
    if (!form.body_text.trim()) next.body_text = 'Please describe the complaint.';
    if (!image) next.image = 'Please attach a photo as evidence.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('citizen_name', form.citizen_name.trim());
      fd.append('citizen_email', form.citizen_email.trim());
      fd.append('citizen_contact', form.citizen_contact.trim());
      fd.append('category', form.category);
      fd.append('severity', form.severity);
      fd.append('language', form.language);
      fd.append('location', form.location.trim());
      fd.append('body_text', form.body_text.trim());
      if (image) fd.append('image', image, image.name);

      await fetch(WEBHOOK_URL, { method: 'POST', body: fd, mode: 'no-cors' });
      // no-cors: response is opaque; treat the send itself as success
      setSubmitted(true);
    } catch (err) {
      setSubmitError('We could not send your complaint. Please check your internet connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(EMPTY);
    clearImage();
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="animate-fade-up rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-8 text-center shadow-xl shadow-emerald-500/5">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="animate-check-pop h-10 w-10 text-emerald-600" strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Complaint submitted successfully.</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Thank you for being a responsible citizen. Your report has been forwarded to the concerned authority.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" /> Submit another complaint
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur p-5 sm:p-7 shadow-xl shadow-slate-900/5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Citizen Name */}
        <Field label="Citizen Name" error={errors.citizen_name}>
          <input
            type="text"
            value={form.citizen_name}
            onChange={(e) => update('citizen_name', e.target.value)}
            placeholder="e.g. Ananya Sharma"
            className={inputCls(!!errors.citizen_name)}
          />
        </Field>

        {/* Citizen Email */}
        <Field label="Citizen Email" error={errors.citizen_email}>
          <input
            type="email"
            value={form.citizen_email}
            onChange={(e) => update('citizen_email', e.target.value)}
            placeholder="you@example.com"
            className={inputCls(!!errors.citizen_email)}
          />
        </Field>

        {/* Mobile Number */}
        <Field label="Mobile Number" error={errors.citizen_contact}>
          <input
            type="tel"
            value={form.citizen_contact}
            onChange={(e) => update('citizen_contact', e.target.value)}
            placeholder="+91 98765 43210"
            className={inputCls(!!errors.citizen_contact)}
          />
        </Field>

        {/* Category */}
        <Field label="Category" error={errors.category} required>
          <select
            value={form.category}
            onChange={(e) => update('category', e.target.value)}
            className={inputCls(!!errors.category)}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>

        {/* Severity */}
        <Field label="Severity" error={errors.severity} required>
          <select
            value={form.severity}
            onChange={(e) => update('severity', e.target.value)}
            className={inputCls(!!errors.severity)}
          >
            <option value="">Select severity</option>
            {SEVERITIES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        {/* Language (fixed) */}
        <Field label="Language" hint="Fixed">
          <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-700">
            English
          </div>
        </Field>

        {/* Location */}
        <Field label="Location" error={errors.location} className="sm:col-span-2">
          <input
            type="text"
            value={form.location}
            onChange={(e) => update('location', e.target.value)}
            placeholder="e.g. MG Road, near Brigade Tower, Bengaluru"
            className={inputCls(!!errors.location)}
          />
        </Field>

        {/* Complaint Description */}
        <Field label="Complaint Description" error={errors.body_text} className="sm:col-span-2">
          <textarea
            value={form.body_text}
            onChange={(e) => update('body_text', e.target.value)}
            rows={4}
            placeholder="Describe the issue in detail — when you noticed it, how it affects the area, etc."
            className={inputCls(!!errors.body_text) + ' resize-y min-h-[110px]'}
          />
        </Field>

        {/* Photo Evidence */}
        <Field label="Photo Evidence" error={errors.image} className="sm:col-span-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="sr-only"
            id="photo-input"
          />
          {imagePreview ? (
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <img src={imagePreview} alt="Evidence preview" className="w-full max-h-64 object-cover" />
              <button
                type="button"
                onClick={clearImage}
                className="absolute top-2 right-2 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur hover:bg-black/70"
              >
                Remove
              </button>
            </div>
          ) : (
            <label
              htmlFor="photo-input"
              className="file-drop flex flex-col items-center justify-center gap-2 rounded-xl bg-slate-50/60 px-4 py-8 cursor-pointer text-center"
            >
              <ImageUp className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">Tap to choose a photo</span>
              <span className="text-xs text-slate-400">From your gallery or files — no camera access needed</span>
            </label>
          )}
        </Field>
      </div>

      {submitError && (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Submit Complaint
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        Your report is sent securely to the civic authorities.
      </p>
    </form>
  );
}

/* ---------- helpers ---------- */

function inputCls(hasError: boolean): string {
  return [
    'w-full h-11 rounded-xl border bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400',
    'outline-none transition focus:ring-2 focus:ring-blue-500/30',
    hasError ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500',
  ].join(' ');
}

function Field({
  label,
  error,
  required,
  hint,
  className = '',
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-semibold text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {hint && <span className="text-xs text-slate-400">{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      )}
    </div>
  );
}
