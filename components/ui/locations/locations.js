import Link from "next/link";
import styles from "./locations.module.scss";

export default function Locations({ locations }) {
  return (
    <>
      <ul aria-label="訪問場所一覧" className={styles.gridContainer}>
        {locations.map(({ title, slug }) => (
          <li key={slug}>
            <Link aria-label={`「${title}」の訪問場所ページへ`} href={`/location/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};