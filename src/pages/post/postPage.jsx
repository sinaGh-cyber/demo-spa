import { Link } from 'react-router-dom';
import styles from './postPage.module.scss';

const PostPage = ({ match }) => {
  const paramId = match.params.id;
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
        <Link to={`/blog/${+paramId - 1}`}>&lt; &lt;</Link>
        <Link to={`/blog/${+paramId + 1}`}>&gt; &gt;</Link>
      </div>
    </section>
  );
};

export default PostPage;
