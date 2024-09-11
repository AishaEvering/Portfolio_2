import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Background from "@/components/background/Background";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Aisha Evering",
    default: "Aisha Evering",
  },
  description: "Check out my smart portfolio website with a custom AI chatbot.",
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
      <title>Aisha Evering | Software Engineer</title>
      <meta
        name="description"
        content="Showcasing a blend of practical expertise and innovative models, my portfolio highlights my journey through data science and machine learning with interactive apps and real-world solutions."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/project-imgs/favicon.ico" />
      <body className={poppins.className}>
        <ThemeProvider>
          <main id="root">
            <Background />
            {children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
