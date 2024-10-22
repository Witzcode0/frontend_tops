import React, { useEffect, useState, Suspense, lazy } from 'react';
import styles from './Blogs.module.css';

const BlogItem = lazy(() => import('./BlogItem')); 

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.blogsContainer}>
      <h2>Blogs</h2>
      <Suspense fallback={<div className={styles.loading}>Loading blog items...</div>}>
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <BlogItem key={blog.id} title={blog.title} body={blog.body} />
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default Blogs;
