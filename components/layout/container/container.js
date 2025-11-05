import "@/styles/style.scss";
import  "./container.scss";

export default function Container({ children, className }) {
  return <div className={`mainContainer ${className ?? ''}`}>{children}</div>;
}
