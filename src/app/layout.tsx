import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Background from "@/components/background/Background";
import { Analytics } from "@vercel/analytics/react";
import { BuzzProvider } from "@/components/buzz/BuzzProvider";

export const metadata: Metadata = {
  title: {
    default: "Aisha Evering | Scientific Software Engineer",
    template: "%s | Aisha Evering",
  },
  description:
    "Software engineer specializing in scientific applications, computational biology, interactive data visualization, and intuitive research tools.",
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
