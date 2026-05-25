import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFonts from "next/font/local";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const ivy = localFonts({
  src: [{ path: "../fonts/IvyMode-Regular.ttf" }],
  variable: "--ivy",
});


const ivy_thin = localFonts({
  src: [{ path: "../fonts/IvyMode-ThinItalic.ttf" }],
  variable: "--ivy-thin",
});

export const metadata: Metadata = {
  title: {
    default: "Astratinvest",
    template: "%s | Astratinvest",
  },
  description:
    "Astratinvest aims for superior risk-adjusted returns through a scientific and mathematical investment model. We conduct quantitative research with rigorous backtesting utilizing high-quality data to identify potential outperformers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* GTM Script in <head> */}
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KDQ3GFCV');
            `,
          }}
        />
      </head>

      <body className={`${inter.className} ${ivy.variable} ${ivy_thin.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3959E5]"
        >
          Skip to main content
        </a>
        {/* GTM NoScript fallback */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDQ3GFCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <Toaster closeButton richColors />
      </body>
    </html>
  );
}



// "use client"; // Required for useRouter()



// import { useEffect } from "react";

// import { usePathname, useRouter } from "next/navigation";

// import { Inter } from "next/font/google";

// import "./globals.css";

// import localFonts from "next/font/local";

// import { Toaster } from "sonner";



// const inter = Inter({ subsets: ["latin"] });



// const ivy = localFonts({

//  src: [{ path: "../fonts/IvyMode-Regular.ttf" }], variable: "--ivy",

// });



// const ivy_thin = localFonts({

//  src: [{ path: "../fonts/IvyMode-ThinItalic.ttf" }], variable: "--ivy-thin",

// });



// export default function RootLayout({ children }: { children: React.ReactNode }) {

//  const router = useRouter();

//  const pathname = usePathname();



//  useEffect(() => {

//   if (pathname !== "/back-soon") {

//    router.replace("/back-soon");

//   }

//  }, [pathname, router]);



//  return (

//   <html lang="en">

//    <body className={`${inter.className} ${ivy.variable} ${ivy_thin.variable}`}>

//     {children}

//     <Toaster closeButton richColors />

//    </body>

//   </html>

//  );

// }
