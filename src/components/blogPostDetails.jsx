import styles from './blogPostDetail.module.css';

export default function BlogPostDetail({ post, onDelete }) {
  if (!post) return <p className={styles.empty}>Post not found.</p>;

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        By <strong>{post.author}</strong> on {new Date(post.date).toDateString()}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </article>
  );
}
