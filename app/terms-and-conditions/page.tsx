import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <NavBar />

      <main className="flex flex-col items-center justify-center w-full overflow-hidden px-6 pt-28 pb-16 bg-white text-[#000121]">
        {/* Heading */}
        <section className="text-center mb-8">
          <h1 className="font-ivy text-[min(6vw,6vh)] font-bold text-[#000121]">
            Terms &amp; Conditions
          </h1>
          <div className="mx-auto mt-4 mb-8 h-1 w-32 bg-[#032f92] relative">
            <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 bg-white"></div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl w-full space-y-6 text-left font-poppins text-gray-700 text-base leading-relaxed">
          <p><strong>Important Notice:</strong></p>
          <p>
            By accessing and using the website of Astratinvest Financial Advisors Private Limited (hereinafter referred to as &quot;Astratinvest&quot;), including any of its web pages, you signify your agreement to these Terms and Conditions. It is important that you read these terms each time you access our website, as they may be amended from time to time at Astratinvest&#39;s sole discretion.
          </p>

          <p><strong>Use of Information and Materials:</strong></p>
          <p>
            The content provided on Astratinvest’s website is for general informational purposes only and should not be construed as financial advice or a recommendation to invest. The information on this website does not constitute an offer or solicitation for investment in any financial product or service. Investments are subject to market risks, including potential loss of principal. Past performance does not guarantee future results. We strongly recommend that users seek independent financial advice before making any investment decisions.
          </p>

          <p><strong>Copyright and Intellectual Property:</strong></p>
          <p>
            All content on this website, including but not limited to text, graphics, logos, icons, and images, is the property of Astratinvest or its content providers and is protected under copyright and intellectual property laws. Any unauthorized use, reproduction, or distribution of the materials on this website is strictly prohibited.
          </p>

          <p><strong>No Warranties:</strong></p>
          <p>
            Astratinvest makes no representations or warranties regarding the accuracy, adequacy, completeness, or reliability of the information provided on its website. All materials are provided &quot;as is&quot; without warranty of any kind. Astratinvest, its affiliates, and their respective officers, employees, and agents shall not be held liable for any damages arising out of or in connection with the use of this website.
          </p>

          <p><strong>Exclusion of Liability:</strong></p>
          <p>
            Astratinvest shall not be liable for any loss or damage of any kind incurred from the use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages. This includes damages arising from reliance on the information provided, transactions conducted through the site, or unauthorized access to user data.
          </p>

          <p><strong>Governing Law:</strong></p>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India.
          </p>

          <p><strong>Privacy and Security:</strong></p>
          <p>
            Astratinvest is committed to maintaining the confidentiality of its users. We collect and process personal data in accordance with our Privacy Policy, which outlines how we collect, use, and protect your personal information. Users are encouraged to review the Privacy Policy before using the website.
          </p>

          <p><strong>Hyperlinks:</strong></p>
          <p>
            This website may contain links to external websites for your convenience. Astratinvest is not responsible for the content, accuracy, or privacy practices of these third-party sites. Users should review the terms and privacy policies of those sites before engaging with them.
          </p>

          <p><strong>Amendments:</strong></p>
          <p>
            Astratinvest reserves the right to update or change these Terms and Conditions at any time. Any modifications will be effective immediately upon posting. Continued use of the website after such changes constitutes your acceptance of the revised terms.
          </p>

          <p><strong>Contact Information:</strong></p>
          <p>
            If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:connect@astratinvest.com" className="text-[#3959E6] underline">connect@astratinvest.com</a>.
          </p>

          <p><strong>Acknowledgment:</strong></p>
          <p>
            By using Astratinvest&#39;s website, you confirm that you have read, understood, and agreed to these Terms and Conditions in full.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
