import { h } from "../../../../deps.ts";
import Layout from "../../../../components/layout.jsx";

export const meta = {
  title: "Mock HTTP Requests",
  date: "24 March 2021",
  slug: "/2021/03/24/mock-http-requests",
  snippet: "coming soon...",
};

export default async function (request) {
  return <Layout title={meta.title}>
    <h1>{meta.title}</h1>
  </Layout>;
}
