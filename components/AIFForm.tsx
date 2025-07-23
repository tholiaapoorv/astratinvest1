"use client";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { Listbox } from "@headlessui/react";

const AIFForm = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [confetti, showConfetti] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const consent1Ref = useRef<HTMLInputElement>(null);
  const consent2Ref = useRef<HTMLInputElement>(null);
  const consent3Ref = useRef<HTMLInputElement>(null);

  const [accountType, setAccountType] = useState("Account Type*");
  const [contactMethod, setContactMethod] = useState("Preferred Communication*");
  const [referralSource, setReferralSource] = useState("How did you hear about us?");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accountOptions = [
    "Resident Indian", "NRI", "Proprietorship", "HUF", "LLP - Partnership",
    "Company & BD Corp", "Societies", "Trust", "AOP or BOI",
    "Bank-Registered Entities", "NRI Entity", "Investor through POA",
  ];
  const contactOptions = ["Call with the team", "Deck on Email"];
  const referralOptions = ["Website", "Referral", "TV", "Podcast", "LinkedIn", "Twitter", "Other"];

  const formSchema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6).max(15),
    account_type: z.string().min(1),
    contact_method: z.string().min(1),
    referral: z.string().optional(),
    consent1: z.boolean().refine(Boolean, { message: "Required" }),
    consent2: z.boolean().refine(Boolean, { message: "Required" }),
    consent3: z.boolean().refine(Boolean, { message: "Required" }),
  });

  useEffect(() => {
    showConfetti(false);
    setIsSubmitting(false);
  }, []);

  return (
    <div className="h-full w-full">
      <section className="relative flex min-h-screen items-center justify-center bg-[#000121] text-white">
        <div className="flex flex-col items-center justify-center px-4 py-4 phone:w-[95%] lg:py-12 smLaptop:w-[80%]">
          {/* Confetti */}
          {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}

          {/* Heading */}
          <h2 className="mb-4 text-center font-ivy text-[min(5vh,5vw)] font-extrabold tracking-wide text-white">
            Register Interest in AIF
          </h2>
          <p className="mb-8 text-center font-poppins text-white/60 phone:text-[min(3.5vw,3.5vh)] sm:text-[min(2.5vw,2.5vh)] smLaptop:mb-12">
            Share your details and our team will get in touch within{" "}
            <span className="text-[#3959E6]">3 working days</span>.
          </p>

          {/* Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const captchaValue = recaptcha?.current?.getValue();
              if (!captchaValue) {
                toast.error("Please verify the reCAPTCHA!");
                setIsSubmitting(false);
                return;
              }
              const parsed = formSchema.safeParse({
                first_name: firstNameRef.current?.value,
                last_name: lastNameRef.current?.value,
                email: emailRef.current?.value,
                phone: phoneRef.current?.value,
                account_type: accountType,
                contact_method: contactMethod,
                referral: referralSource,
                consent1: consent1Ref.current?.checked,
                consent2: consent2Ref.current?.checked,
                consent3: consent3Ref.current?.checked,
              });
              if (!parsed.success) {
                parsed.error.errors.forEach((err) => toast.error(err.message));
                recaptcha.current?.reset();
                setIsSubmitting(false);
                return;
              }
              await fetch("https://script.google.com/macros/s/AKfycbyAOmzg8JjOeqIQlcXbuPMotwbjE4YM3KI8k5NJwu0iplaJeMlmbxLZ_MbiKq5I4loz/exec", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(parsed.data),
              });
              showConfetti(true);
              recaptcha.current?.reset();
              toast.success("Submitted successfully! We’ll be in touch soon.");
              setIsSubmitting(false);
            }}
            className="w-full space-y-6 font-poppins"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input ref={firstNameRef} required placeholder="First Name*" className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20" />
              <input ref={lastNameRef} required placeholder="Last Name*" className="p-4 bg-[#1a1a2f] rounded-md text-white border border-white/20" />
            </div>
            <input ref={emailRef} required placeholder="Email*" type="email" className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20" />
            <input ref={phoneRef} required placeholder="Phone Number*" type="tel" className="p-4 w-full bg-[#1a1a2f] rounded-md text-white border border-white/20" />

            {/* Dropdowns */}
            <Dropdown label="Account Type*" options={accountOptions} selected={accountType} setSelected={setAccountType} />
            <Dropdown label="Preferred Communication*" options={contactOptions} selected={contactMethod} setSelected={setContactMethod} />
            <Dropdown label="How did you hear about us?" options={referralOptions} selected={referralSource} setSelected={setReferralSource} />

            {/* Consents */}
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

            <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string} />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => showConfetti(false)}
              className="flex w-full items-center justify-center rounded-lg bg-[#3959E6] p-4 text-white font-medium hover:bg-[#2d45b5]"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Dropdown Component
const Dropdown = ({ label, options, selected, setSelected }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="w-full p-4 rounded-md bg-[#1a1a2f] text-white text-left border border-white/20">
          {selected}
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#1a1a2f] py-1 text-white shadow-lg ring-1 ring-white/10 focus:outline-none sm:text-sm">
          {options.map((option: string, idx: number) => (
            <Listbox.Option
              key={idx}
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
      </div>
    </Listbox>
  </div>
);

export default AIFForm;
