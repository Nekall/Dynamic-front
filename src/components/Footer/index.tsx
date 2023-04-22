// Syles
import styles from "./styles.module.scss";

const Footer = ({ links }: any) => {

  return (
    <footer className={styles.__footer}>
      <ul>
        {links.map(({ name }: any, index: number) => (
          <li key={index}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
