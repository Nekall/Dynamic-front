// Styles
import styles from "./styles.module.scss";

const Video = () => {
  return (
    <section className={styles.__video}>
      <div className={styles.__title}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur a perspiciatis, inventore nemo quis rem laborum cum delectus eos recusandae.</p>
      </div>
      <video width="320" height="240" controls>
        <source src="" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
