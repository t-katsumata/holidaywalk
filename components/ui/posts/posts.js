import { extractText } from "@/lib/extract-text"
import { formatDate } from "@/lib/date"
import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from './posts.module.scss'

export default function Posts({ posts }) {
  return (
    <>
      <div className={styles.postContainer}>
        {posts.map(({ publishedAt, title, slug, thumbnail, category, location, content }, index) => (
          <article
            className={styles.postItem}
            key={slug}
            aria-labelledby={`post-title-${slug}`}
          >
            <Link
              className={styles.postBody}
              href={`/memories/${slug}`}
              aria-label={`「${title}」の記事詳細ページへ`}
            >
              <div className={styles.postDetail}>
                <div className={styles.postDetail__content}>
                  <time dateTime={publishedAt} className={styles.postDetail__date}>{formatDate(publishedAt)}</time>
                  <ul aria-label="カテゴリと訪問場所" className={styles.postDetail__tag}>
                    <li>{category[0].title}</li>
                    {
                      location.map(({ slug, title }) => (
                        <li key={slug}>{title}</li>
                      ))
                    }
                  </ul>
                </div>
                <h3 id={`post-title-${slug}`} className={styles.postDetail__title}>{title}</h3>
                <p className={styles.postDetail__text}>{extractText(content, 40)}</p>
              </div>
              <figure className={styles.postImage}>
                <Image
                  src={thumbnail.url}
                  alt={`「${title}」の画像`}
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                  priority={index < 2}
                />
              </figure>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};
