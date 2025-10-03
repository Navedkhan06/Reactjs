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

    const ratingClass = rating >= 8.5 ? "super_hit" : "average";

    return (
        <li className="card">
            <div>
                <img src={img_url} alt={name} width="30%" height="40%" />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <h3>Rating: <span className={`rating ${ratingClass}`}> {rating} </span></h3>
                <p>Summary : {summary}</p>
                <p>Genre : {genre.join(", ")}</p>
                <p>Cast: {cast.join(", ")}</p>
                <a href={watch_url} target="_blank" >
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
            {/* inline css  */}
            {/* <div className="card-content">
            <h2 style={{margin:"1.2rem 0"}}>{name}</h2>
            <h3 style={{margin:"1.2rem 0"}}>Rating: {rating}</h3>
            <p style={{margin:"1.2rem 0"}} >Summary : {summary}</p>
            <p style={{margin:"1.2rem 0"}} >Genre : {genre.join(", ")}</p>
            <p style={{margin:"1.2rem 0"}}>Cast: {cast.join(", ")}</p>
            <a href={watch_url} target="_blank" >
                <button>Watch Now</button>
            </a>
        </div> */}
        </li>
    );
};