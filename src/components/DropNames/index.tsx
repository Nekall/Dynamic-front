// Styles
import styles from "./styles.module.scss";

const DropNames = () => {
  const names = [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Architecto",
    "Consectetur",
    "Amet",
  ];

  return (
    <section className={styles.__drop_names}>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className={styles.__names}>
        {names.map((name, index) => {
          return (
            <div key={`name-${index}`} className={styles.__name}>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DropNames;
