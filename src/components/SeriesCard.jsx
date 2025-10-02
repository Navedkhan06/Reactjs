export const SeriesCard = (props) => {
    console.log(props)
    return (<li key={props}>
        <div>
            <img src={props.currElement.img_url} alt={props.currElement.name} width="30%" height="40%" />
        </div>
        <h2>Cartoon Name: {props.currElement.name} </h2>
        <h3>Rating: {props.currElement.rating}</h3>
        <p>Summary : {props.currElement.summary}</p>
        <p>Genre : {props.currElement.genre.join(", ")}</p>
        <p>Cast: {props.currElement.cast.join(", ")}</p>
        <a href={props.currElement.watch_url} target="_blank" >
            <button>Watch Now</button>
        </a>
    </li>
    );
};