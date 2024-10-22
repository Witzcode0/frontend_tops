
import React from 'react';
import styles from './Blogs.module.css';

const BlogItem = ({ title, body }) => {
  return (
    <li className={styles.blogItem}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

export default BlogItem;
