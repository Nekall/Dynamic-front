// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.__hero}>
      <div>
        <p className={styles.__pretitle}>WHAT IS DYNAMIC FRONT ?</p>
        <h1 className={styles.__title}>
          DynamicFront is a Next.js landing page with a dynamic content.
        </h1>
        <div className={styles.__details}>
          <p className={styles.__paragraph}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl nec ultricies lacinia, nisl nisl tincidunt nisl, nec
            aliquet nisl nisl eu nisl. Sed tincidunt, nisl nec ultricies
            lacinia.
          </p>
          <div className={styles.__buttons}>
            <button>See more</button> <button>Lorem ipsum</button>
          </div>
        </div>
      </div>
      <div className={styles.__illustration}>
        <p>Logo</p>
      </div>
    </div>
  );
};

export default Hero;
