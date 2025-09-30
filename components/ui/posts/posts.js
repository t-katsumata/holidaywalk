import { extractText } from "@/lib/extract-text"
import { formatDate } from "@/lib/date"
import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from './posts.module.scss'

export default function Posts({ posts }) {
  return (
    <>
      <div className={styles.postContainer}>
        {posts.map(({ publishedAt, title, slug, thumbnail, category, location, content }) => (
          <article className={styles.postItem} key={slug}>
            <Link className={styles.postBody} href={`/memories/${slug}`}>
              <div className={styles.postDetail}>
                <div className={styles.postDetail__content}>
                  <time dateTime={publishedAt} className={styles.postDetail__date}>{formatDate(publishedAt)}</time>
                  <ul className={styles.postDetail__tag}>
                    <li>{category[0].title}</li>
                    {
                      location.map(({ slug, title }) => (
                        <li key={slug}>{title}</li>
                      ))
                    }
                  </ul>
                </div>
                <h3 className={styles.postDetail__title}>{title}</h3>
                <p className={styles.postDetail__text}>{extractText(content, 40)}</p>
              </div>
              <figure className={styles.postImage}>
                <Image
                  src={thumbnail.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
              </figure>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};
