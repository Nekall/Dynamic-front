import Image from "next/image";

// Assets
import geometrical2 from "../../../public/images/geometrical/geometrical-2.gif";

// Styles
import styles from "./styles.module.scss";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  cta1: string;
  cta2: string;
}

const Hero = ({ title, subtitle, description, cta1, cta2 }: HeroProps) => {
  return (
    <div className={styles.__hero}>
      <div>
        <p className={styles.__pretitle}>{title}</p>
        <h1 className={styles.__title}>
          {subtitle}
        </h1>
        <div className={styles.__details}>
          <p className={styles.__paragraph}>
            {description}
          </p>
          <div className={styles.__buttons}>
            <button>{cta1}</button> <button>{cta2}</button>
          </div>
        </div>
      </div>
      <div className={styles.__illustration}>
        <Image src={geometrical2} alt="image" width={350} />
      </div>
    </div>
  );
};

export default Hero;
