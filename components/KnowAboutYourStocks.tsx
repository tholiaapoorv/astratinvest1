import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { fork } from "child_process";

const ContactUs = () => {
  // const indianPhoneNumber = new RegExp(/^(?:\+91)?[6-9]\d{9}$/);
  // const nameRegex = new RegExp(/^[a-zA-Z]+([a-zA-Z\s'-])*$/);
  const formDataSchema = z.object({
    // name: z.string().min(1).max(100).regex(nameRegex, {
    //   message: "Invalid Name Input",
    // }),
    name: z.string().min(1).max(100),
    email: z.string().email({ message: "Invalid email address" }),
    // phone: z.string().regex(indianPhoneNumber, {
    //   message:
    //     "Invalid Indian phone number. It must be a 10-digit number starting with digits 6-9, Not prefixed by a 0.",
    // }),
    phone: z.string().max(10).min(6),
    stock: z.string().min(1).max(100),
    message: z
      .string({
        message: "Your Query must be 10 to 20000 chars long",
      })
      .min(10)
      .max(20000),
  });
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [confetti, showConfetti] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  //   console.log("recaptcha===", recaptcha.current?.getValue());

  useEffect(() => {
    showConfetti(false);
    setIsSubmitting(false);
  }, []);

  return (
    <div className="h-full w-full">
      <section className="relative flex h-full items-center justify-center bg-[#000121] dark:bg-gray-900">
        <div
          id="contact-form-div"
          className="flex flex-col items-center justify-center px-4 py-8 phone:w-[95%] lg:py-16 smLaptop:w-[80%]"
        >
          {/* Confetti Effect */}
          {confetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              className="relative"
              recycle={false}
            />
          )}
          <h2 className="mb-4 text-center font-ivy text-[min(6.5vh,6.5vw)] font-extrabold tracking-wide text-white">
            Know About Your Stock
          </h2>
          <p className="mb-8 text-center font-poppins font-light text-white/70 dark:text-gray-400 phone:text-[min(3.2vh,3.5vw)] smTablet:text-[min(2.3vh,2.3vw)] smLaptop:mb-16 smLaptop:text-[min(2.5vh,2.5vw)]">
            Connect with us for a detailed analysis of the stock and we will get
            back to you within{" "}
            <span className="text-[#3959E6]">3 working Days</span>.
          </p>
          <div className="flex items-center justify-center phone:w-[95%] tablet:w-[80%]">
            <form
              action="POST"
              id="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form: HTMLFormElement = document.getElementById(
                  "contact-form",
                ) as HTMLFormElement;

                setIsSubmitting(true);

                //* CAPTCHA VERIFICATION

                const captchaValue = recaptcha?.current?.getValue();

                if (!captchaValue) {
                  alert("Please verify the reCAPTCHA!");
                  setIsSubmitting(false);
                } else {
                  const res = await fetch("/api/verify", {
                    method: "POST",
                    body: JSON.stringify(captchaValue),
                    headers: {
                      "content-type": "application/json",
                    },
                  });
                  const data = await res.json();
                  if (data.success) {
                    //* SEND EMAIL IF VERIFIED
                    const formDataToSend = formDataSchema.safeParse({
                      name: nameRef.current?.value,
                      email: emailRef.current?.value,
                      stock: stockRef.current?.value,
                      phone: phoneRef.current?.value,
                      message: messageRef.current?.value,
                    });
                    console.log("formDataToSend", formDataToSend.error?.errors);

                    if (formDataToSend.success) {
                      const response = await fetch("/api/resend-email", {
                        method: "POST",
                        body: JSON.stringify({
                          name: formDataToSend.data.name,
                          email: formDataToSend.data.email,
                          stock: formDataToSend.data.stock,
                          phone: formDataToSend.data.phone,
                          message: formDataToSend.data.message,
                        }),
                      });

                      const status = await response.json();

                      form.reset();
                      recaptcha.current?.reset();
                      // alert("Form submission successful!");

                      setIsSubmitting(false);
                      if (status.success === true) {
                        toast.success(
                          "We'll get back to you at the earliest. Have a good day!",
                        );
                        showConfetti(true);
                        setIsSubmitting(false);
                      } else {
                        toast.error(
                          "Something went wrong. Please try again later",
                        );
                        setIsSubmitting(false);
                      }
                    } else {
                      setIsSubmitting(false);
                      if (formDataToSend.error.format().phone?._errors) {
                        toast.error(
                          formDataToSend.error.format().phone?._errors,
                        );
                      }
                      if (formDataToSend.error.format().email?._errors) {
                        toast.error(
                          formDataToSend.error.format().email?._errors,
                        );
                      }
                      if (formDataToSend.error.format().name?._errors) {
                        toast.error(
                          formDataToSend.error.format().name?._errors,
                        );
                      }
                      if (formDataToSend.error.format().stock?._errors) {
                        toast.error(
                          formDataToSend.error.format().stock?._errors,
                        );
                      }
                      if (formDataToSend.error.format().message?._errors) {
                        toast.error(
                          formDataToSend.error.format().message?._errors,
                        );
                      }
                      recaptcha.current?.reset();
                    }
                  } else {
                    alert("reCAPTCHA validation failed!");
                    setIsSubmitting(false);
                  }
                }
              }}
              className="w-full space-y-8 font-poppins"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name*
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-poppins text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  E-mail {"(Optional)"}
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-poppins text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="name@astratinvest.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Contact Number*
                </label>
                <input
                  ref={phoneRef}
                  type="tel"
                  id="phone"
                  className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-poppins text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name of the Stock*
                </label>
                <input
                  ref={stockRef}
                  type="text"
                  id="subject"
                  className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-poppins text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="eg. HDFCBANK"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your message*
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-poppins text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Write Your Query..."
                  required
                ></textarea>
              </div>
              <ReCAPTCHA
                ref={recaptcha}
                sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
              />
              <button
                type="submit"
                onClick={() => {
                  showConfetti(false);
                }}
                className="flex w-full items-center justify-center rounded-[0.75rem] bg-[#3959E6] p-4 text-center text-sm font-medium outline transition"
              >
                {isSubmitting ? (
                  <Loader2 className="h-auto w-8 animate-spin" />
                ) : (
                  <span className="font-poppins text-white">Send message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
