// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from 'react-router-dom';
import styles from './postPage.module.scss';
// import queryString from 'query-string';
import React from 'react';

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const PostPage = ({ match, location }) => {
    const paramId = match.params.id;
  //   const query = queryString.parse(location.search);

//   const query = useQuery();

//   console.log(query.get('location'));
  return (
    <section>
      <h1>{`post number ${paramId}`}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
        harum inventore omnis quis dolore quidem magni repellat. Veniam eaque
        est sed esse perspiciatis aut ullam harum recusandae! Quaerat rem
        doloremque, assumenda a quam nesciunt unde incidunt, error accusamus
        voluptate obcaecati!
      </p>
      <div className={styles.forwardAndBackwardBtnGroup}>
        <Link key="next" to={`/blog/${+paramId - 1}`}>
          &lt; &lt;
        </Link>
        <Link key="prev" to={`/blog/${+paramId + 1}`}>
          &gt; &gt;
        </Link>
      </div>
    </section>
  );
};

export default PostPage;
