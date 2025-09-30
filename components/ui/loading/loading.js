import "@/styles/globals.css";

export default function Loading() {
  return (
    <div className="loadingWrapper">
      <svg viewBox="0 0 50 50" className="spinner">
        <circle cx="25" cy="25" r="23" fill="none" className="circle" />
      </svg>
      <span className="loading">ローディング中...</span>
    </div>
  );
}
