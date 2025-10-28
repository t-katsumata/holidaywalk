import Link from "next/link";
import styles from "./posts-pagination.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";

export default function Pagination({
  prevThumb = '',
  prevText = '',
  prevUrl = '',
  nextThumb = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul aria-label="投稿ナビゲーション" className={`${styles.postPagination} ${nextThumb && nextText && nextUrl ? "" : styles.reverse}`}>
      {nextThumb && nextText && nextUrl && (
        <li className={styles.nextItem}>
          <Link
            href={nextUrl}
            className={styles.nextLink}
            aria-label={`次の記事「${nextText}」へ`}
          >
            <FontAwesomeIcon aria-hidden="true" icon={faSquareCaretLeft} size="xl" />
            <figure>
              <img
                src={nextThumb.url}
                alt=""
                width={160}
                height={90}
                role="presentation"
              />
            </figure>
            <span>{nextText}</span>
          </Link>
        </li>
      )}
      <li className={styles.topItem}>
        <Link
          href="/memories"
          className={styles.topLink}
          aria-label="「ウォーキング記録室」トップへ戻る"
        >
          Memories<br />Top
        </Link>
      </li>
      {prevThumb && prevText && prevUrl && (
        <li className={styles.prevItem}>
          <Link
            href={prevUrl}
            className={styles.prevLink}
            aria-label={`前の記事「${prevText}」へ`}
          >
            <span>{prevText}</span>
            <figure>
              <img
                src={prevThumb.url}
                alt=""
                width={160}
                height={90}
                role="presentation"
              />
            </figure>
            <FontAwesomeIcon aria-hidden="true" icon={faSquareCaretRight} size="xl" />
          </Link>
        </li>
      )}
    </ul>
  )
}