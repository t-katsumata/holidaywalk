import Link from "next/link";
import "./footer.scss";
import { Sawarabi_Mincho } from "next/font/google";
import Container from "../container/container";

const sawarabiMincho = Sawarabi_Mincho({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sawarabi-mincho',
});

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <Container className="footer__wrapper">
        <div>
          <Link
            className={`${sawarabiMincho.variable} footer__logo`}
            href="/"
            aria-label="トップページへ戻る"
          >
            <span lang="ja">空犬冒険記</span>
          </Link>
        </div>
        <ul className="footer__mainNav">
          <li><Link href="/about">このサイトについて</Link></li>
          <li>
            <Link href="/memories">ウォーキング記録室</Link>
            <ul className="footer__subNav footer__subNav--category">
              <li><Link href="/category/rivers">河川</Link></li>
              <li><Link href="/category/lake">湖</Link></li>
              <li><Link href="/category/ponds-swamps">池・沼</Link></li>
              <li><Link href="/category/coast">海岸</Link></li>
              <li><Link href="/category/town-areas">市街地</Link></li>
            </ul>
            <ul className="footer__subNav footer__subNav--location">
              <li><Link href="/location/tokyo">東京</Link></li>
              <li><Link href="/location/kanagawa">神奈川</Link></li>
              <li><Link href="/location/saitama">埼玉</Link></li>
              <li><Link href="/location/chiba">千葉</Link></li>
              <li><Link href="/location/ibaraki">茨城</Link></li>
              <li><Link href="/location/other">その他</Link></li>
            </ul>
          </li>
          <li><Link href="/step-calc">歩数算出ツール</Link></li>
          <li><Link href="mailto:katsumata.tooru.ks@gmail.com">お問い合わせ</Link></li>
        </ul>
        <small lang="en">Copyright &copy; 2025 Sorainu All right reserved. </small>
      </Container>
    </footer>
  );
};
