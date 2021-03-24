import { h } from "../deps.ts";

export default function Layout({ children, title, style }) {
  return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{title} | Deno World</title>
      <link rel="stylesheet" href="/style.css" />
      {style && <style dangerouslySetInnerHTML={{ __html: style }}></style>}
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
        <a className="font-semibold" href="/">deno.world</a>
      </header>
      {children}
    </body>
  </html>;
}
