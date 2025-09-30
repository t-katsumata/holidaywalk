import styles from "./page-hero.module.scss";
import Image from "next/image";

export default async function PageHero({ image, title, subTitle, content }) {
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.body}>
          <h2 className={styles.title}>
            <span className={styles.title__main}>{title}</span>
            <span className={styles.title__sub}>{subTitle}</span>
          </h2>
          <figure>
            <Image
              src={image}
              alt=""
              width={1000}
              height={300}
              loading="eager"
              priority={true}
              className={styles.image}
            />
          </figure>
        </div>
        <p className={styles.content}>{content}</p>
      </header>
    </>
  );
}