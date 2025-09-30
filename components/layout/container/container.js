import "@/styles/style.scss";
import  "./container.scss";

export default function Container({ children }) {
  return <div className="mainContainer">{children}</div>;
}
