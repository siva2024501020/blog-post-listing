import React from "react";
import BlogPostItem from "./BlogPostItem";
import styles from "./BlogPostList.module.css";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "2024-05-01",
    description: "Learn how to set up a React app from scratch using Vite."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    date: "2024-05-05",
    description: "A beginner's guide to useState and useEffect."
  },
  {
    id: 3,
    title: "Styling in React",
    date: "2024-05-10",
    description: "Different ways to style your React components."
  }
];

function BlogPostList() {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPostList;
