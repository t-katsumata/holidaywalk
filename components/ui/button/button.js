import Link from "next/link";
import styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Button({ buttonText = "", buttonUrl = "" }) {
  return (
    <div className={styles.buttonWrapper}>
      <Link href={buttonUrl} className={styles.button}>
        {buttonText}
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </div>
  );
}
