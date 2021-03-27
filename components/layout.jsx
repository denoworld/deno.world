import { h } from "../deps.ts";

const highlightJsStyles = css`
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #011627;
    color: #d6deeb;
  }
  .hljs-keyword {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-built_in {
    color: #addb67;
    font-style: italic;
  }
  .hljs-type {
    color: #82aaff;
  }
  .hljs-literal {
    color: #ff5874;
  }
  .hljs-number {
    color: #f78c6c;
  }
  .hljs-regexp {
    color: #5ca7e4;
  }
  .hljs-string {
    color: #ecc48d;
  }
  .hljs-subst {
    color: #d3423e;
  }
  .hljs-symbol {
    color: #82aaff;
  }
  .hljs-class {
    color: #ffcb8b;
  }
  .hljs-function {
    color: #82aaff;
  }
  .hljs-title {
    color: #dcdcaa;
    font-style: italic;
  }
  .hljs-params {
    color: #7fdbca;
  }
  .hljs-comment {
    color: #637777;
    font-style: italic;
  }
  .hljs-doctag {
    color: #7fdbca;
  }
  .hljs-meta {
    color: #82aaff;
  }
  .hljs-meta-keyword {
    color: #82aaff;
  }
  .hljs-meta-string {
    color: #ecc48d;
  }
  .hljs-section {
    color: #82b1ff;
  }
  .hljs-builtin-name,
  .hljs-name,
  .hljs-tag {
    color: #7fdbca;
  }
  .hljs-attr {
    color: #7fdbca;
  }
  .hljs-attribute {
    color: #80cbc4;
  }
  .hljs-variable {
    color: #addb67;
  }
  .hljs-bullet {
    color: #d9f5dd;
  }
  .hljs-code {
    color: #80cbc4;
  }
  .hljs-emphasis {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-strong {
    color: #addb67;
    font-weight: 700;
  }
  .hljs-formula {
    color: #c792ea;
  }
  .hljs-link {
    color: #ff869a;
  }
  .hljs-quote {
    color: #697098;
    font-style: italic;
  }
  .hljs-selector-tag {
    color: #ff6363;
  }
  .hljs-selector-id {
    color: #fad430;
  }
  .hljs-selector-class {
    color: #addb67;
    font-style: italic;
  }
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-template-tag {
    color: #c792ea;
  }
  .hljs-template-variable {
    color: #addb67;
  }
  .hljs-addition {
    color: #addb67ff;
    font-style: italic;
  }
  .hljs-deletion {
    color: #ef535090;
    font-style: italic;
  }
`;

function css(style) {
  return style.join("");
}

export default function Layout({ children, title, style }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title} | Deno World</title>
        <link rel="stylesheet" href="/style.css" />
        {/* Use highlight.js styles */}
        <style dangerouslySetInnerHTML={{ __html: highlightJsStyles }} />
        {style && <style dangerouslySetInnerHTML={{ __html: style }} />}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="container max-w-screen-md mx-auto px-2">
        <header className="flex justify-end my-5 text-3xl">
          <a className="font-semibold" href="/">
            deno.world
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
