// Styles
import styles from "./styles.module.scss";

interface PrefooterProps {
  title: string;
  description: string;
  cta1: string;
  cta2: string;
}

const Prefooter = ({ title, description, cta1, cta2 }: PrefooterProps) => {
  return (
    <section className={styles.__prefooter}>
      <div className={styles.__title}>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <div className={styles.__buttons}>
          <button>{cta1}</button>
          <button>{cta2}</button>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
