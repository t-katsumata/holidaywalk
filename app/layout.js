import { baseMetadata, openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
import { Fraunces, Zen_Old_Mincho } from "next/font/google";
import Header from "@/components/layout/header/header";
import Pagetop from "@/components/ui/pagetop/pagetop";
import Footer from "@/components/layout/footer/footer";
import "@/styles/style.scss";

import { siteMeta } from "@/lib/constans";
const { siteLang } = siteMeta;

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-old-mincho",
});

export default function RootLayout({ children }) {
  return (
    <html lang={siteLang}>
      <body className={`${fraunces.variable} ${zenOldMincho.variable}`}>
        <Header />
        <main role="main" className="pageContainer">{children}</main>
        <Pagetop />
        <Footer />
      </body>
    </html>
  );
}
