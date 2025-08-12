"use client";
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic"; // ⟵ for lazy captcha
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { Listbox, Portal } from "@headlessui/react";

const ACCOUNT_OPTIONS = [
  "Resident Indian","NRI","Proprietorship","HUF","LLP - Partnership",
  "Company & BD Corp","Societies","Trust","AOP or BOI",
  "Bank-Registered Entities","NRI Entity","Investor through POA",
] as const;
const CONTACT_OPTIONS = ["Call with the team", "Deck on Email"] as const;
const REFERRAL_OPTIONS = ["Website","Referral","TV","Podcast","LinkedIn","Twitter","Other"] as const;

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6).max(15),
  account_type: z.string().min(1, "Select an account type"),
  contact_method: z.string().min(1, "Select a contact method"),
  referral: z.string().optional(),
  consent1: z.boolean().refine(Boolean, { message: "Required" }),
  consent2: z.boolean().refine(Boolean, { message: "Required" }),
  consent3: z.boolean().refine(Boolean, { message: "Required" }),
});

const AIFForm = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const consent1Ref = useRef<HTMLInputElement>(null);
  const consent2Ref = useRef<HTMLInputElement>(null);
  const consent3Ref = useRef<HTMLInputElement>(null);

  const [accountType, setAccountType] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false); // lazy-mount captcha

  useEffect(() => setIsSubmitting(false), []);

  const actionUrl = useMemo(
    () => "https://script.google.com/macros/s/AKfycbyAOmzg8JjOeqIQlcXbuPMotwbjE4YM3KI8k5NJwu0iplaJeMlmbxLZ_MbiKq5I4loz/exec",
    []
  );

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const parsed = formSchema.safeParse({
        first_name: firstNameRef.current?.value,
        last_name: lastNameRef.current?.value,
        email: emailRef.current?.value,
        phone: phoneRef.current?.value,
        account_type: accountType,
        contact_method: contactMethod,
        referral: referralSource,
        consent1: !!consent1Ref.current?.checked,
        consent2: !!consent2Ref.current?.checked,
        consent3: !!consent3Ref.current?.checked,
      });
      if (!parsed.success) {
        toast.error(parsed.error.errors[0]?.message ?? "Please check the form");
        setIsSubmitting(false);
        return;
      }

      // checkbox captcha flow (as you had)
      const captchaValue = recaptcha.current?.getValue();
      if (!captchaValue) {
        toast.error("Please verify the reCAPTCHA!");
        setIsSubmitting(false);
        return;
      }

      await fetch(actionUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(parsed.data),
      });

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
  }, [isSubmitting, accountType, contactMethod, referralSource, actionUrl]);

  return (
    <div className="w-full bg-[#000121] text-white">
      {/* avoid full vh on mobile to reduce relayout when keyboard shows */}
      <section className="relative flex items-center justify-center py-10 sm:min-h-screen">
        <div className="flex flex-col items-center justify-center px-4 phone:w-[95%] lg:py-10 smLaptop:w-[80%] max-w-3xl">
          {/* use fixed responsive sizes instead of vw/vh */}
          <h2 className="mb-3 text-center font-ivy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
            Register Interest in AIF
          </h2>
          <p className="mb-8 text-center font-poppins text-sm sm:text-base text-white/70">
            Share your details and our team will get in touch within{" "}
            <span className="text-[#3959E6]">3 working days</span>.
          </p>

          <form
            onSubmit={onSubmit}
            onFocus={() => setShowCaptcha(true)} // mount captcha after first interaction
            className="w-full space-y-6 font-poppins"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input ref={firstNameRef} required placeholder="First Name*" className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20" />
              <input ref={lastNameRef} required placeholder="Last Name*" className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20" />
            </div>

            <input ref={emailRef} required placeholder="Email*" type="email" className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20" />
            <input ref={phoneRef} required placeholder="Phone Number*" type="tel" className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20" />

            {/* Headless UI dropdowns with portalized options for proper scrolling */}
            <Dropdown label="Account Type*" value={accountType} onChange={setAccountType} options={ACCOUNT_OPTIONS} required />
            <Dropdown label="Preferred Communication*" value={contactMethod} onChange={setContactMethod} options={CONTACT_OPTIONS} required />
            <Dropdown label="How did you hear about us?" value={referralSource} onChange={setReferralSource} options={REFERRAL_OPTIONS} />

            <div className="text-sm space-y-2">
              <label className="flex gap-2 items-start">
                <input ref={consent1Ref} type="checkbox" required />
                As per SEBI regulations, AIF requires a minimum investment of ₹1 Crore.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent2Ref} type="checkbox" required />
                I consent to allow Astratinvest to contact me.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent3Ref} type="checkbox" required />
                I seek information on my own accord without solicitation or advertisement.*
              </label>
            </div>

            {showCaptcha && (
              <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string} />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-lg bg-[#3959E6] p-4 text-white font-medium hover:bg-[#2d45b5] disabled:opacity-60"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

/** Dropdown with Portal'ed options — smooth scrolling + no clipping */
function Dropdown<T extends readonly string[]>({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: T;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block mb-1">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative mt-1">
            <Listbox.Button className="w-full p-4 rounded-md bg-[#1a1a2f] text-white text-left border border-white/20">
              {value || "Select an option"}
            </Listbox.Button>

            {/* Portal options to body to avoid scroll/clip issues */}
            {open && (
              <Portal>
                <Listbox.Options
                  className="z-[60] mt-1 max-h-60 w-[min(90vw,36rem)] overflow-auto overscroll-contain touch-manipulation rounded-md bg-[#1a1a2f] py-1 text-white shadow-lg ring-1 ring-white/10 focus:outline-none sm:text-sm fixed left-1/2 -translate-x-1/2"
                  // Centered under trigger; for pixel-perfect anchoring you can compute coords via refs if desired
                >
                  {options.map((option) => (
                    <Listbox.Option
                      key={option}
                      value={option}
                      className={({ active }) =>
                        `cursor-pointer select-none py-2 px-4 ${
                          active ? "bg-[#3959E6] text-white" : "text-white"
                        }`
                      }
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Portal>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
}

export default AIFForm;
