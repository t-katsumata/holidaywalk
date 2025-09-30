"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./pagetop.module.scss";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function PageTop() {
  const elementRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (elementRef.current) {
      const handleVisible = () => {
        const rect = elementRef.current.getBoundingClientRect();
        setPosition(rect.top);
        if (scrollY > 200 && innerHeight < rect.top - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      handleVisible();
      window.addEventListener("resize", handleVisible);
      window.addEventListener("scroll", handleVisible);
      return () => {
        window.removeEventListener("resize", handleVisible);
        window.removeEventListener("scroll", handleVisible);
      }
    }
  }, []);

  useEffect(() => {
    setPosition(null);
  }, [pathname]);

  const handleScrollTo = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <p
        ref={elementRef}
        onClick={handleScrollTo}
        className={`${styles.hideBtn} ${isVisible ? styles.visible : ""}`}
        aria-label="ページトップへ戻る"
      >
        <span><FontAwesomeIcon icon={faChevronUp} /></span>
      </p>
    </>
  );
}
