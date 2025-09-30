import Link from "next/link";
import styles from "./categories.module.scss";
import Image from "next/legacy/image";

export default function categories({ categories }) {
  return (
    <>
      <ul className={styles.gridContainer}>
        {categories.map(({ title, slug, icon }) => (
          <li key={slug}>
            <Link href={`/category/${slug}`}>
              <figure>
                <Image
                  src={icon.url}
                  alt=""
                  width={64}
                  height={64}
                />
              </figure>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
