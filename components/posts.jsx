import { h } from "../deps.ts";
import PostCard from "./postcard.jsx";

const MarginWrapper = (props) => <div className="my-4" {...props} />;

export default function Posts({ posts }) {
  return posts.map((post) =>
    <MarginWrapper>
      <PostCard {...post} />
    </MarginWrapper>
  );
}
