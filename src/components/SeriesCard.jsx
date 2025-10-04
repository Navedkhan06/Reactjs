import styles from "./Cartoon.module.css";

export const SeriesCard = ({ currElement }) => {
    // console.log(props);
    const { id, img_url, name, rating, summary, cast, genre, watch_url } = currElement;
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        // backgroundColor: "var( --bnt-hover-bg-color)",
        backgroundColor: `${rating >= 8.5 ? "#7cdea0": "#f7dc6f"}`,
        color: "var(--bg-color)",
        fontWeight: "bold",
        cursor: "pointer",
    }

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="30%" height="40%" />
            </div>
            <div className={styles["card-content"]}>
                <h2>{name}</h2>
                <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}> {rating} </span></h3>
                <p className="text-3xl font-bold underline">Summary : {summary}</p>
                <p>Genre : {genre.join(", ")}</p>
                <p>Cast: {cast.join(", ")}</p>
                <a href={watch_url} target="_blank" >
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};