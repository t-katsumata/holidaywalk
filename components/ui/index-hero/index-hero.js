import "./index-hero.scss";
import { Fraunces, Sawarabi_Mincho } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
});

const sawarabiMincho = Sawarabi_Mincho({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sawarabi-mincho',
});

export default function IndexHero() {
  return (
  <div className="indexHero">
    <p className={`${sawarabiMincho.variable}`}>
      空犬冒険記
      <span className={`${fraunces.variable}`}>Holiday Walk</span>
    </p>
  </div>
  );
}
