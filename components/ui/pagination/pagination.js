import Link from "next/link";
import "./pagination.scss"
import { PER_PAGE } from "@/lib/constans";
const { postsPage } = PER_PAGE;

export const Pagination = ({ totalCount, prevNum, currentNum, nextNum }) => {
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ol aria-label="ページナビゲーション" className="pagination">
      {
        prevNum !== 0 ? <li><Link aria-label="前のページ" href={prevNum === 1 ? `/memories/` : `/memories/page/${prevNum}`}>&lt;</Link></li> : ""
      }
      {range(1, Math.ceil(totalCount / postsPage)).map((number, index) => (
        <li key={index}>
          <Link
            className={number === currentNum ? "current" : ""}
            {...(number === currentNum ? { "aria-current": "page" } : {})}
            href={number === 1 ? `/memories/` : `/memories/page/${number}`}
          >
            {number}
          </Link>
        </li>
      ))}
      {
        typeof nextNum === "number" && nextNum > currentNum ? (
          <li>
            <Link aria-label="次のページ" href={`/memories/page/${nextNum}`}>&gt;</Link>
          </li>
        ) : null
      }
    </ol>
  );
};
