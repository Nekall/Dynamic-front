import Image from "next/image";

// Assets
import geometrical1 from "../../../public/images/geometrical/geometrical-1.gif";
import geometrical4 from "../../../public/images/geometrical/geometrical-4.gif";
import geometrical3 from "../../../public/images/geometrical/geometrical-3.gif";

// Style
import styles from "./styles.module.scss";

interface CardsProps {
  title: string;
  cards: {
    title: string;
    description: string;
    button: string;
  }[];
}

const Cards = ({ title, cards }: CardsProps) => {
  const geometricals = [geometrical1, geometrical4, geometrical3];

  return (
    <section className={styles.__cards}>
      <h2>{title}</h2>
      <div className={styles.__container}>
        {cards.map(({ title, description, button }, index) => {
          return (
            <div key={`card-${index}`} className={styles.__card}>
              <h3 className={styles.__title}>{title}</h3>
              <p>{description}</p>
              <Image src={geometricals[index]} alt="image" width={350} />
              <button>{button}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
