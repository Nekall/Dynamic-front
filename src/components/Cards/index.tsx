import Image from "next/image";

// Assets
import geometrical1 from "../../../public/images/geometrical/geometrical-1.gif";
import geometrical4 from "../../../public/images/geometrical/geometrical-4.gif";
import geometrical3 from "../../../public/images/geometrical/geometrical-3.gif";

// Style
import styles from "./styles.module.scss";

const Cards = () => {

    const cards = [
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem.",
            image: geometrical1,
            button: "Learn More"
        },
        {
            title: "Consectetur adipiscing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem.",
            image: geometrical4,
            button: "Learn More"
        },
        {
            title: "Sed euismod",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nisl, vitae aliquam nisl nunc et lorem.",
            image: geometrical3,
            button: "Learn More"
        }
    ];

    return(
        <section className={styles.__cards}>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <div className={styles.__container}>
                {cards.map(({ title, description, image, button }, index) => {
                    return(
                        <div key={`card-${index}`} className={styles.__card}>
                            <h3 className={styles.__title}>{title}</h3>
                            <p>{description}</p>
                            <Image src={image} alt="image" width={350} />
                            <button>{button}</button>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Cards;