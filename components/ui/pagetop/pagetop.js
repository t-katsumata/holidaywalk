"use client";

import { useEffect, useRef } from "react";
import styles from "./pagetop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default function PageTop() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // フッター要素を取得
      const footer = document.querySelector("footer");
      const footerHeight = footer ? footer.offsetHeight : 0;

      // 下端からの距離
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      // フェードイン条件: 200px以上スクロール && 下端から100px以上余裕あり
      const shouldShow = scrollY > 200 && distanceFromBottom > 100;

      // フェードアウト条件: フッター高さ + 100px 以内に入ったら消す
      const shouldHideNearFooter = distanceFromBottom <= footerHeight + 100;

      if (shouldShow && !shouldHideNearFooter) {
        gsap.to(buttonRef.current, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(buttonRef.current, { autoAlpha: 0, duration: 0.4, ease: "power2.out" });
      }
    };

    handleScroll(); // 初期判定
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollTo = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleScrollTo}
        className={styles.hideBtn}
        style={{ opacity: 0, visibility: "hidden" }}
        aria-label="ページトップへ戻る"
      >
        <span aria-hidden="true"><FontAwesomeIcon icon={faChevronUp} /></span>
      </button>
    </>
  );
}
