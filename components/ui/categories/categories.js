import Link from "next/link";
import styles from "./categories.module.scss";
import Image from "next/legacy/image";

export default function Categories({ categories }) {
  return (
    <>
      <ul aria-label="カテゴリ一覧" className={styles.gridContainer}>
        {categories.map(({ title, slug, icon }) => (
          <li key={slug}>
            <Link aria-label={`「${title}」カテゴリページへ`} href={`/category/${slug}`}>
              <div>
                <Image
                  src={icon.url}
                  alt=""
                  width={64}
                  height={64}
                  role="presentation"
                />
              </div>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
