import React from "react";

export default function Blog({ posts }: any) {
  return <div>Blog {posts}</div>;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const posts = "statically generated";

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
