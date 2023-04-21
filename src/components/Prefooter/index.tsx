// Styles
import styles from "./styles.module.scss";

const Prefooter = () => {
  return (
    <section className={styles.__prefooter}>
      <div className={styles.__title}>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          incidunt quod non ab aperiam eligendi harum quo perferendis fugit
          amet.
        </p>
        <div className={styles.__buttons}>
          <button>Lorem ipsum</button>
          <button>Consectetur</button>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
