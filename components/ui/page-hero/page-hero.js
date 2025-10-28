import styles from "./page-hero.module.scss";
import Image from "next/image";

export default async function PageHero({ image, title, subTitle, content }) {
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.body}>
          <h1 className={styles.title}>
            {title}<span className={styles.title__sub}>{subTitle}</span>
          </h1>
          
          <figure aria-hidden="true">
            <Image
              src={image}
              alt=""
              width={1000}
              height={300}
              loading="eager"
              priority="true"
              className={styles.image}
            />
          </figure>
        </div>
        <p className={styles.content}>{content}</p>
      </header>
    </>
  );
}