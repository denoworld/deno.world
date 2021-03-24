import { h } from "../deps.ts";
import Layout from "../components/layout.jsx";
import Posts from "../components/posts.jsx";
import { meta as mockHttpRequests } from "./2021/03/24/mock-http-requests.jsx";

export default async function Home() {
  return <Layout title="Home">
    <Posts posts={[mockHttpRequests]} />
  </Layout>;
}
