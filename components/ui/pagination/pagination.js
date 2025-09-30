import Link from "next/link";
import "./pagination.scss"
import { PER_PAGE } from "@/lib/constans";
const { postsPage } = PER_PAGE;

export const Pagination = ({ totalCount, prevNum, currentNum, nextNum }) => {
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ol className="pagination">
      {
        prevNum !== 0 ? <li><Link href={prevNum === 1 ? `/memories/` : `/memories/page/${prevNum}`}>&lt;</Link></li> : ""
      }
      {range(1, Math.ceil(totalCount / postsPage)).map((number, index) => (
        <li key={index}>
          <Link className={number === currentNum ? "current" : ""} href={number === 1 ? `/memories/` : `/memories/page/${number}`}>{number}</Link>
        </li>
      ))}
      {
        nextNum !== "" ? <li><Link href={`/memories/page/${nextNum}`}>&gt;</Link></li> : ""
      }
    </ol>
  );
};
