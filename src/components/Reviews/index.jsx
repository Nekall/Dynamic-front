import {useState} from "react";

// Styles
import styles from "./styles.module.scss";

const Reviews = () => {
    const [page, setPage] = useState(1);

    const reviews = [
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
            name: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            review: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
            name: "Provident similique accusantium",
        },
        {
            review: "Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
            name: "Quo neque error repudiandae",
        },
        {
            review: "Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque.",
            name: "Perspiciatis minima nesciunt dolorem",
        },
        {
            review: "Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. ",
            name: "Quaerat provident commodi consectetur",
        },
    ]


    return (
        <section className={styles.__reviews}>
            <div className={styles.__title_buttons}>
                <h2>Lorem ipsum dolor sit.</h2>
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