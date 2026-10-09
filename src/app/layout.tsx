import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "./providers/RecaptchaProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Amaya Perdana Kreasindo | Architecting Intelligent Digital Solutions",
  description:
    "Transforming complex challenges into AI-powered web and mobile applications. From fluid cross-platform experiences to advanced language model integrations, we build secure, scalable systems designed to automate operations and drive real results.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Amaya Perdana Kreasindo | Architecting Intelligent Digital Solutions",
    description:
      "Transforming complex challenges into AI-powered web and mobile applications. From fluid cross-platform experiences to advanced language model integrations, we build secure, scalable systems designed to automate operations and drive real results.",
    url: "https://amayaperdana.id/",
    type: "website",
    images: [
      {
        url: "https://amayaperdana.id/assets/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "Amaya Perdana Kreasindo Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaya Perdana Kreasindo",
    description: "Architecting Intelligent Digital Solutions for Business Growth.",
    images: ["https://amayaperdana.id/assets/preview-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background font-sans antialiased">
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
