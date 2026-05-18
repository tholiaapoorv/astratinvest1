"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import "../app/globals.css";

// --- Move static data OUTSIDE the component to avoid recreations ---
const ACCOUNT_OPTIONS = [
  "Resident Indian", "NRI", "Proprietorship", "HUF", "LLP - Partnership",
  "Company & BD Corp", "Societies", "Trust", "AOP or BOI",
  "Bank-Registered Entities", "NRI Entity", "Investor through POA",
] as const;

const CONTACT_OPTIONS = ["Call with the team", "Deck on Email"] as const;

const REFERRAL_OPTIONS = ["Website", "Referral", "TV", "Podcast", "LinkedIn", "Twitter", "Other"] as const;

// --- Validation (fast + precise) ---
const indianPhonePattern = /^(?:\+?91[-\s]?)?[6-9]\d{9}$/;

const formSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100),
  last_name: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().transform(v => v.replace(/\s+/g, "")).refine(v => indianPhonePattern.test(v), {
    message: "Enter a valid Indian number (10 digits, starts 6–9; +91 allowed).",
  }),
  account_type: z.enum(ACCOUNT_OPTIONS, { errorMap: () => ({ message: "Select an account type" }) }),
  contact_method: z.enum(CONTACT_OPTIONS, { errorMap: () => ({ message: "Select a contact method" }) }),
  referral: z.union([z.enum(REFERRAL_OPTIONS), z.literal(""), z.undefined()]).transform(v => (v === "" ? undefined : v)),
  consent1: z.literal(true, { errorMap: () => ({ message: "SEBI minimum ₹1 Cr confirmation is required" }) }),
  consent2: z.literal(true, { errorMap: () => ({ message: "Consent to contact is required" }) }),
  consent3: z.literal(true, { errorMap: () => ({ message: "Self-initiated info confirmation is required" }) }),
});

const AIFForm = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);

  // Uncontrolled text inputs via refs = fewer re-renders than controlled fields
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const consent1Ref = useRef<HTMLInputElement>(null);
  const consent2Ref = useRef<HTMLInputElement>(null);
  const consent3Ref = useRef<HTMLInputElement>(null);

  // Keep only the small, necessary state
  const [accountType, setAccountType] = useState<string>("");
  const [contactMethod, setContactMethod] = useState<string>("");
  const [referralSource, setReferralSource] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize action URL so React doesn’t think it changed every render
  const actionUrl = useMemo(
    () =>
      "https://script.google.com/macros/s/AKfycbyAOmzg8JjOeqIQlcXbuPMotwbjE4YM3KI8k5NJwu0iplaJeMlmbxLZ_MbiKq5I4loz/exec",
    []
  );

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const captchaValue = recaptcha.current?.getValue();
      if (!captchaValue) {
        toast.error("Please verify the reCAPTCHA");
        setIsSubmitting(false);
        return;
      }

      const parsed = formSchema.safeParse({
        first_name: firstNameRef.current?.value ?? "",
        last_name: lastNameRef.current?.value ?? "",
        email: emailRef.current?.value ?? "",
        phone: phoneRef.current?.value ?? "",
        account_type: accountType as (typeof ACCOUNT_OPTIONS)[number],
        contact_method: contactMethod as (typeof CONTACT_OPTIONS)[number],
        referral: referralSource as (typeof REFERRAL_OPTIONS)[number] | "",
        consent1: Boolean(consent1Ref.current?.checked),
        consent2: Boolean(consent2Ref.current?.checked),
        consent3: Boolean(consent3Ref.current?.checked),
      });

      if (!parsed.success) {
        // Show first error to avoid a cascade of toasts (faster UX)
        toast.error(parsed.error.errors[0]?.message ?? "Please check the form");
        recaptcha.current?.reset();
        setIsSubmitting(false);
        return;
      }

      // Fire-and-forget to Apps Script (no-cors means we can’t read the response)
      await fetch(actionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      // Reset UI quickly
      (e.target as HTMLFormElement).reset();
      setAccountType("");
      setContactMethod("");
      setReferralSource("");
      recaptcha.current?.reset();

      toast.success("Submitted successfully! We’ll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [accountType, contactMethod, referralSource, actionUrl, isSubmitting]);

  return (
    <div className="h-full w-full">
      <section className="relative flex min-h-screen items-center justify-center bg-[#000121] text-white">
        <div className="flex flex-col items-center justify-center px-4 py-4 phone:w-[95%] lg:py-12 smLaptop:w-[80%]">
          <h2 className="mb-4 text-center font-ivy text-[min(5vh,5vw)] font-extrabold tracking-wide">
            Register Interest in AIF
          </h2>
          <p className="mb-8 text-center font-poppins text-white/60 phone:text-[min(3.5vw,3.5vh)] sm:text-[min(2.5vw,2.5vh)] smLaptop:mb-12">
            Share your details and our team will get in touch within{" "}
            <span className="text-[#4969f6]">3 working days</span>.
          </p>

          <form onSubmit={onSubmit} className="w-full space-y-6 font-poppins">
            {/* Names */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  ref={firstNameRef}
                  required
                  placeholder="First Name*"
                  className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20"
                  autoComplete="given-name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  ref={lastNameRef}
                  required
                  placeholder="Last Name*"
                  className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20"
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id='email'
                ref={emailRef}
                required
                placeholder="Email*"
                type="email"
                className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20"
                autoComplete="email"
                inputMode="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                ref={phoneRef}
                required
                placeholder="Phone Number*"
                type="tel"
                inputMode="tel"
                maxLength={15}
                className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20"
                autoComplete="tel"
              />
            </div>

            {/* Dropdowns (native <select> = faster + scrollable everywhere) */}
            <Select
              id="accountType"
              label="Account Type*"
              value={accountType}
              onChange={setAccountType}
              options={ACCOUNT_OPTIONS}
              required
            />
            <Select
              id="contactMethod"
              label="Preferred Communication*"
              value={contactMethod}
              onChange={setContactMethod}
              options={CONTACT_OPTIONS}
              required
            />
            <Select
              id="referralSource"
              label="How did you hear about us?"
              value={referralSource}
              onChange={setReferralSource}
              options={REFERRAL_OPTIONS}
              placeholder="Select an option (optional)"
            />

            {/* Consents */}
            <div className="text-sm space-y-3 leading-6">
              <label className="flex gap-2 items-start">
                <input ref={consent1Ref} type="checkbox" required className="mt-1" />
                As per SEBI regulations, AIF requires a minimum investment of ₹1 Crore.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent2Ref} type="checkbox" required className="mt-1" />
                I consent to allow Astratinvest to contact me.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent3Ref} type="checkbox" required className="mt-1" />
                I seek information on my own accord without solicitation or advertisement.*
              </label>
            </div>

            <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string} />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-lg bg-[#2d45b5] p-4 text-white font-medium hover:bg-[#253d9e] disabled:opacity-60"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Minimal, styled native select with perfect scrolling perf
function Select<T extends readonly string[]>({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: T;
  placeholder?: string;
  required?: boolean;
  id: string;
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-1">{label}</label>
      <div className="relative">
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none p-4 rounded-md bg-[#1a1a2f] text-white border border-white/20 focus:outline-none"
        >
          <option value="">{placeholder ?? "Select an option"}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {/* Chevron */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">▾</span>
      </div>
    </div>
  );
}

export default AIFForm;
