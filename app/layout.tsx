import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFonts from "next/font/local";
import { Toaster } from "sonner";

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
      <body className={`${inter.className} ${ivy.variable} ${ivy_thin.variable}`}>
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
