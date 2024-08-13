import Background from "@/components/background/Background";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div id="root" className={poppins.className}>
        <Background />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
