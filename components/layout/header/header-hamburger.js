"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./header-hamburger.module.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);
  const [clicked, setClicked] = useState("");
  const handleOpenMenu = () => {
    setClicked(styles.clicked);
    setOpenMenu(!openMenu);

    if (typeof window === "object") {
      document.querySelector("body").classList.toggle(styles.scrollDisable);
    }
  };

  return (
    <>
      <button className={`${styles.hamburger} ${clicked} ${openMenu ? styles.isActive : ""}`} onClick={handleOpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.header_navBackground} ${openMenu ? styles.isActive : ""}`} onClick={handleOpenMenu}></div>

      <div className={`${styles.header__nav} ${openMenu ? styles.isActive : ""}`}>
        <nav>
          <ul className={styles.header__menuWrapper}>
            <li className={styles.header__menuList}>
              <Link className={styles.header__menuItem} href="/" onClick={handleOpenMenu}>
                <span className={styles.header__menuItemTitle}>
                  Home
                  <span>ホーム</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link className={styles.header__menuItem} href="/about" onClick={handleOpenMenu}>
                <span className={styles.header__menuItemTitle}>
                  About
                  <span>このサイトについて</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link className={styles.header__menuItem} href="/memories" onClick={handleOpenMenu}>
                <span className={styles.header__menuItemTitle}>
                  Memories
                  <span>ウォーキング記録室</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link className={styles.header__menuItem} href="/step-calc" onClick={handleOpenMenu}>
                <span className={styles.header__menuItemTitle}>
                  Step Calculation
                  <span>歩数算出ツール</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__navWrapper}>
          <h2 className={styles.header__navTitle}>Category</h2>
          <ul className={styles.header__navList}>
            <li>
              <Link className={styles.header__categoryNavItem} href={`/category/rivers`} onClick={handleOpenMenu}>
                <figure>
                  <Image src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/6864fe10548b4ba987b3380702a21e43/icon-rivers.svg" alt="" width={56} height={56} />
                </figure>
                <p>河川</p>
              </Link>
            </li>
            <li>
              <Link className={styles.header__categoryNavItem} href={`/category/lake`} onClick={handleOpenMenu}>
                <figure>
                  <Image src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/ec4875189fe147f2b71ba56483163f25/icon-lake.svg" alt="" width={56} height={56} />
                </figure>
                <p>湖</p>
              </Link>
            </li>
            <li>
              <Link className={styles.header__categoryNavItem} href={`/category/ponds-swamps`} onClick={handleOpenMenu}>
                <figure>
                  <Image src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/e691942bf5e145eaaac60dcea5fe2eb0/icon-pondsSwamps.svg" alt="" width={56} height={56} />
                </figure>
                <p>池・沼</p>
              </Link>
            </li>
            <li>
              <Link className={styles.header__categoryNavItem} href={`/category/coast`} onClick={handleOpenMenu}>
                <figure>
                  <Image src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/480ca8ce5c754350aff0931835c87e0e/icon-coast.svg" alt="" width={56} height={56} />
                </figure>
                <p>海岸</p>
              </Link>
            </li>
            <li>
              <Link className={styles.header__categoryNavItem} href={`/category/town-areas`} onClick={handleOpenMenu}>
                <figure>
                  <Image src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/9779244207e94bb6a7b1423bc996c96e/icon-townAreas.svg" alt="" width={56} height={56} />
                </figure>
                <p>市街地</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.header__navWrapper}>
          <h2 className={styles.header__navTitle}>Location</h2>
          <ul className={styles.header__navList}>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/tokyo`} onClick={handleOpenMenu}>東京
              </Link>
            </li>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/kanagawa`} onClick={handleOpenMenu}>神奈川
              </Link>
            </li>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/saitama`} onClick={handleOpenMenu}>埼玉
              </Link>
            </li>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/chiba`} onClick={handleOpenMenu}>千葉
              </Link>
            </li>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/ibaraki`} onClick={handleOpenMenu}>茨城
              </Link>
            </li>
            <li>
              <Link className={styles.header__locationNavItem} href={`/location/other`} onClick={handleOpenMenu}>その他
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
