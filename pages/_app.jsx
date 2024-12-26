import "@/styles/globals.css";
import "@/styles/fonts.css";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${roboto.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
