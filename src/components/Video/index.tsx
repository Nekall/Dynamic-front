// Styles
import styles from "./styles.module.scss";

interface VideoProps {
  title: string;
  subtitle: string;
}

const Video = ({ title, subtitle }: VideoProps) => {
  return (
    <section className={styles.__video}>
      <div className={styles.__title}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <video width="320" height="240" controls>
        <source src="" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
