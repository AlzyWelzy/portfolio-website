import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manvendra Rajpoot | Personal Portfolio",
  description:
    "Innovative Full Stack Developer with a Proven Track Record in Building Scalable Web Applications.",
  keywords: [
    "Manvendra Rajpoot",
    "Portfolio",
    "Developer",
    "Full-stack",
    "alzywelzy",
    "Alzy Welzy",
    "welzyalzy",
    "Welzy Alzy",
    "manvendra",
    "rajpoot",
    "rajpoot.dev",
    "www.rajpoot.dev",
  ],
  authors: {
    name: "Manvendra Rajpoot",
    url: "https://www.rajpoot.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Manvendra Rajpoot | Personal Portfolio",
    creator: "@AlzyWelzy",
    site: "@AlzyWelzy",
    description:
      "Innovative Full Stack Developer with a Proven Track Record in Building Scalable Web Applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
