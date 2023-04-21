// Syles
import styles from "./styles.module.scss";

const Footer = () => {
  const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Contact" },
    { name: "Blog" },
    { name: "Careers" },
  ];

  return (
    <footer className={styles.__footer}>
      <ul>
        {links.map(({ name }, index) => (
          <li key={index}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
