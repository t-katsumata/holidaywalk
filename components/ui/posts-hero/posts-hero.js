import Image from "next/legacy/image";
import styles from "./posts-hero.module.scss";

export default async function PostsHero({ cat, type }) {
  return (
    <>
      <header className={styles.wrapper}>
        <figure className={styles.image}>
          <Image
            src={cat.thumbnail.url}
            alt=""
            width={800}
            height={400}
            loading="eager"
            priority={true}
          />
        </figure>
        <h2 className={styles.title}>{type}：{cat.title}</h2>
        <p className={styles.content}>{cat.content}</p>
      </header>
    </>
  );
}