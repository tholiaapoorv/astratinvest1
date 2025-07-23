import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <NavBar />

      <main className="flex flex-col items-center justify-center w-full overflow-hidden px-6 pt-28 pb-16 bg-white text-[#000121]">
        {/* Heading */}
        <section className="text-center mb-8">
          <h1 className="font-ivy text-[min(6vw,6vh)] font-bold text-[#000121]">
            Privacy Policy
          </h1>
          <div className="mx-auto mt-4 mb-8 h-1 w-32 bg-[#032f92] relative">
            <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 bg-white"></div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl w-full space-y-6 text-left font-poppins text-gray-700 text-base leading-relaxed">
          <p>
            At <strong>Astratinvest Financial Advisors Private Limited</strong> (&quot;Astratinvest&quot;), we prioritize the privacy and security of our clients&#39; personal, financial, and transactional information. Our commitment to safeguarding your data is integral to our relationship with you, and we use advanced technologies to ensure a secure online experience. This Privacy Policy outlines how we collect, use, protect, and share information obtained through our website, and it reflects our dedication to your privacy.
          </p>

          <p><strong>Information Collection and Use</strong></p>
          <p>
            Astratinvest may collect personal information including your name, address, email address, phone number, date of birth, PAN, Aadhaar, occupation, income details, risk profile, nominee information, investment data, and bank details. We obtain this information via emails, forms, WhatsApp communication, or directly via onboarding processes. This data is used to facilitate account opening, complete KYC procedures, and manage your account. We may also use this information to share product updates, send important service communications, and enhance the user experience.
          </p>

          <p><strong>Sharing and Disclosure of Information</strong></p>
          <p>
            Your personal information may be shared with authorized third parties including custodians, KYC/KRA registration agencies, CRM providers, auditors, and other regulated service vendors strictly for operational or legal compliance. Such disclosures are made with adherence to high confidentiality standards and only to enhance service quality or to fulfill statutory obligations.
          </p>

          <p><strong>Protection of Information</strong></p>
          <p>
            Astratinvest employs stringent measures to protect your information. We safeguard your data using both technical and organizational security practices. Access to your information is protected via secure credentials such as login ID and password. We urge users to change their passwords periodically and handle credentials with care.
          </p>

          <p><strong>Cookies and Web Analytics</strong></p>
          <p>
            Our website uses cookies and third-party tools like Google Analytics to enhance your browsing experience, remember your preferences, and monitor site traffic. These tools do not collect personally identifiable financial data. By using our site, you consent to the placement of these cookies. Users may disable cookies through their browser settings if desired.
          </p>

          <p><strong>Your Rights and Responsibilities</strong></p>
          <p>
            You have the right to access and correct your personal information at any time. We encourage you to keep your information updated through the features available on our platform. Sharing any confidential data obtained through Astratinvest services with third parties without our consent may constitute a policy violation.
          </p>

          <p><strong>Changes to the Privacy Policy</strong></p>
          <p>
            Astratinvest reserves the right to update or amend this Privacy Policy at its discretion and without prior notice. We recommend you revisit this page periodically to stay informed about how your information is protected.
          </p>

          <p><strong>Contact Us</strong></p>
          <p>
            If you have any queries or concerns about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:connect@astratinvest.com" className="text-[#3959E6] underline">connect@astratinvest.com</a>.
          </p>

          <p>
            This Privacy Policy is governed by the laws of India and is designed to comply with all relevant legal and regulatory requirements, including those set by the Securities and Exchange Board of India (SEBI). This policy does not create any enforceable legal rights on behalf of any party.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
