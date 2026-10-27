import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Background from "@/components/background/Background";
import { Analytics } from "@vercel/analytics/react";
import { BuzzProvider } from "@/components/buzz/BuzzProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://aishaeportfolio.com"),
  title: {
    default: "Aisha Evering | Scientific Software Engineer",
    template: "%s | Aisha Evering",
  },
  description:
    "Software engineer specializing in scientific applications, computational biology, interactive data visualization, and intuitive research tools.",
  openGraph: {
    title: "Aisha Evering | Scientific Software Engineer",
    description: "I write code. I analyze data. I ask biological questions.",
    url: "https://aishaeportfolio.com",
    siteName: "Aisha Evering",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Aisha Evering's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-preview.png"],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/project-imgs/favicon.ico" />
      <body className={poppins.className}>
        <ThemeProvider>
          <BuzzProvider>
            <main id="root">
              <Background />
              {children}
              <Analytics />
            </main>
          </BuzzProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
