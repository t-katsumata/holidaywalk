import Link from "next/link";
import styles from "./header.module.scss";
import Hamburger from "./header-hamburger";
import { Sawarabi_Mincho } from "next/font/google";

const sawarabiMincho = Sawarabi_Mincho({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sawarabi-mincho',
});

export default function header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link className={`${sawarabiMincho.variable}`} href="/">
          空犬冒険記
        </Link>
      </h1>
      <Hamburger />
    </header>
  );
};