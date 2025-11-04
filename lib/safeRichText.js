import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";

export default function safeRichText(content) {
  const clean = sanitizeHtml(content, {
    allowedTags: ["p", "br", "h2", "h3", "strong", "em", "a", "ul", "ol", "li", "img"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt"],
    },
  });

  return parse(clean)
}