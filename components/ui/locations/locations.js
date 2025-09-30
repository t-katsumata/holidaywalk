import Link from "next/link";
import styles from "./locations.module.scss";

export default function locations({ locations }) {
  return (
    <>
      <ul className={styles.gridContainer}>
        {locations.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/location/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};