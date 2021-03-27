import { h } from "../../../../deps.ts";
import Layout from "../../../../components/layout.jsx";
import Code from "../../../../components/code.jsx";

export const meta = {
  title: "Mock HTTP Requests",
  date: "24 March 2021",
  slug: "/2021/03/28/mock-http-requests",
  snippet: "coming soon...",
};

export default async function (request) {
  return <Layout title={meta.title}>
    <h1 className="text-2xl">{meta.title}</h1>
    <span className="text-sm text-gray-600">{meta.date}</span>
    <br />
    <Code>
      {`
        // mock
        await mockFetch(new Request("https://github.com"), new Response("code"))

        const response = await fetch("https://github.com");
        console.log(await response.text()); // code
      `}
    </Code>
  </Layout>;
}
