import {useState} from "react";

// Styles
import styles from "./styles.module.scss";

const Reviews = ({ title, reviews }) => {
    const [page, setPage] = useState(1);

    return (
        <section className={styles.__reviews}>
            <div className={styles.__title_buttons}>
                <h2>{title}</h2>
                <div className={styles.__pagination}>
                    <span>{page}/{reviews.length}</span>
                    <div>
                        <button onClick={()=> page-1 < 1 ? setPage(1) : setPage(page-1)}>←</button>
                        <button onClick={()=> page+1 > reviews.length ? setPage(reviews.length) : setPage(page+1)}>→</button>
                    </div>
                </div>
            </div>
            <div className={styles.__review}>
                <p>«{reviews[page-1].review}»</p>
                <span> — {reviews[page-1].name}</span>
            </div>

        </section>
    )
}

export default Reviews;