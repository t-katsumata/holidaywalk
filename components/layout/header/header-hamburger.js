"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./header-hamburger.module.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);
  const firstLinkRef = useRef(null);
  const [clicked, setClicked] = useState("");

  const handleOpenMenu = () => {
    setClicked(styles.clicked);
    setOpenMenu(!openMenu);

    if (typeof window === "object") {
      document.querySelector("body").classList.toggle(styles.scrollDisable);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && openMenu) {
        setOpenMenu(false);
        if (typeof window === "object") {
          document.querySelector("body").classList.toggle(styles.scrollDisable);
        }
      }
    };
    
    if (openMenu && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openMenu]);

  return (
    <>
      <button
        className={`${styles.hamburger} ${clicked} ${openMenu ? styles.isActive : ""}`}
        onClick={handleOpenMenu}
        aria-label={openMenu ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={openMenu}
        aria-controls="global-navigation"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.header_navBackground} ${openMenu ? styles.isActive : ""}`} onClick={handleOpenMenu}></div>

      <div
        id="global-navigation"
        className={`${styles.header__nav} ${openMenu ? styles.isActive : ""}`}
        role="navigation"
        aria-label="グローバルナビゲーション"
      >
        <nav>
          <ul className={styles.header__menuWrapper}>
            <li className={styles.header__menuList}>
              <Link
                className={styles.header__menuItem}
                href="/"
                onClick={handleOpenMenu}
                ref={firstLinkRef}
                aria-label="トップページへ戻る"
              >
                <span className={styles.header__menuItemTitle}>
                  Home
                  <span>ホーム</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link
                className={styles.header__menuItem}
                href="/about"
                onClick={handleOpenMenu}
                aria-label="「このサイトについて」のページへ"
              >
                <span className={styles.header__menuItemTitle}>
                  About
                  <span>このサイトについて</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link
                className={styles.header__menuItem}
                href="/memories"
                onClick={handleOpenMenu}
                aria-label="「ウォーキング記録室」のページへ"
              >
                <span className={styles.header__menuItemTitle}>
                  Memories
                  <span>ウォーキング記録室</span>
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className={styles.header__menuList}>
              <Link
                className={styles.header__menuItem}
                href="/step-calc"
                onClick={handleOpenMenu}
                aria-label="「歩数算出ツール」のページへ"
              >
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
          <ul aria-label="カテゴリ一覧" className={styles.header__navList}>
            <li>
              <Link aria-label="「河川」カテゴリページへ" className={styles.header__categoryNavItem} href={`/category/rivers`} onClick={handleOpenMenu}>
                <div>
                  <Image role="presentation" src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/6864fe10548b4ba987b3380702a21e43/icon-rivers.svg" alt="" width={56} height={56} />
                </div>
                <p>河川</p>
              </Link>
            </li>
            <li>
              <Link aria-label="「湖」カテゴリページへ" className={styles.header__categoryNavItem} href={`/category/lake`} onClick={handleOpenMenu}>
                <div>
                  <Image role="presentation" src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/ec4875189fe147f2b71ba56483163f25/icon-lake.svg" alt="" width={56} height={56} />
                </div>
                <p>湖</p>
              </Link>
            </li>
            <li>
              <Link aria-label="「池・沼」カテゴリページへ" className={styles.header__categoryNavItem} href={`/category/ponds-swamps`} onClick={handleOpenMenu}>
                <div>
                  <Image role="presentation" src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/e691942bf5e145eaaac60dcea5fe2eb0/icon-pondsSwamps.svg" alt="" width={56} height={56} />
                </div>
                <p>池・沼</p>
              </Link>
            </li>
            <li>
              <Link aria-label="「海岸」カテゴリページへ" className={styles.header__categoryNavItem} href={`/category/coast`} onClick={handleOpenMenu}>
                <div>
                  <Image role="presentation" src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/480ca8ce5c754350aff0931835c87e0e/icon-coast.svg" alt="" width={56} height={56} />
                </div>
                <p>海岸</p>
              </Link>
            </li>
            <li>
              <Link aria-label="「市街地」カテゴリページへ" className={styles.header__categoryNavItem} href={`/category/town-areas`} onClick={handleOpenMenu}>
                <div>
                  <Image role="presentation" src="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/9779244207e94bb6a7b1423bc996c96e/icon-townAreas.svg" alt="" width={56} height={56} />
                </div>
                <p>市街地</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.header__navWrapper}>
          <h2 className={styles.header__navTitle}>Location</h2>
          <ul aria-label="訪問場所一覧" className={styles.header__navList}>
            <li>
              <Link aria-label="「東京」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/tokyo`} onClick={handleOpenMenu}>東京
              </Link>
            </li>
            <li>
              <Link aria-label="「神奈川」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/kanagawa`} onClick={handleOpenMenu}>神奈川
              </Link>
            </li>
            <li>
              <Link aria-label="「埼玉」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/saitama`} onClick={handleOpenMenu}>埼玉
              </Link>
            </li>
            <li>
              <Link aria-label="「千葉」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/chiba`} onClick={handleOpenMenu}>千葉
              </Link>
            </li>
            <li>
              <Link aria-label="「茨城」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/ibaraki`} onClick={handleOpenMenu}>茨城
              </Link>
            </li>
            <li>
              <Link aria-label="「その他」の訪問場所ページへ" className={styles.header__locationNavItem} href={`/location/other`} onClick={handleOpenMenu}>その他
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
