import hljs from "https://cdn.skypack.dev/highlight.js@v10.7.1";
import { h } from "../deps.ts";

function normalize(code) {
  return code.trim().split("\n").map((line) => line.trim()).join("\n");
}

export default function Code({ children, language = "typescript" }) {
  const highlightedCode = hljs.highlight(normalize(children), {
    language,
  }).value;

  return <div
    className="p-2 my-6 bg-gray-800 rounded-md max-w-screen-md text-white"
  >
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  </div>;
}
