import { Link } from 'react-router-dom';
import styles from './blogPage.module.scss';

const blogPostsLink = [
  { title: 'Post 1', to: '/blog/1', id: 0 },
  { title: 'Post 2', to: '/blog/2', id: 1 },
  { title: 'Post 3', to: '/blog/3', id: 2 },
  { title: 'Post 4', to: '/blog/4', id: 3 },
  { title: 'Post 5', to: '/blog/5', id: 4 },
];

const BlogPage = () => {
  return (
    <section>
      <ul className={styles.ulTag}>
        {blogPostsLink.map((post) => {
          return (
            <li key={post.id}>
              <Link
                replace={true}
                to={{ pathname: post.to, search: 'location=true' }}
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogPage;
