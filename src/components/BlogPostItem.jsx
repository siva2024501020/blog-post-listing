import React from "react";
import styles from "./BlogPostItem.module.css";

function BlogPostItem({ post }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.date}>{post.date}</p>
      <p className={styles.description}>{post.description}</p>
    </div>
  );
}

export default BlogPostItem;
