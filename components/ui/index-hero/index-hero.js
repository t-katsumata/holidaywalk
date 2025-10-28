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
    <h1 className={`${sawarabiMincho.variable}`}>
      <span lang="ja">空犬冒険記</span>
      <span lang="en" className={`${fraunces.variable}`}>Holiday Walk</span>
    </h1>
  </div>
  );
}
