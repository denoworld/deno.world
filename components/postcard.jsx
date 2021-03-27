import { h } from "../deps.ts";

export default function PostCard({ title, date, snippet, slug }) {
  return <div>
    <h3 className="text-2xl">
      <a href={slug}>
        {title}
      </a>
    </h3>
    <p>{snippet}</p>
    <span className="text-sm text-gray-600">{date}</span>
  </div>;
}
