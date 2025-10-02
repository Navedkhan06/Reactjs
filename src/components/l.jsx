import currElement from "../api/seriesData.json";
const CartoonSeries = () => {
  return (
    <ul>
      {
        currElement.map((currElement) => {
         return( <li key="{currElement.id}">
            <div>
              <img src={currElement.img_url} alt={currElement.name} width="30%" height="40%" />
            </div>
            <h2>Cartoon Name: {currElement.name} </h2>
            <h3>Rating: {currElement.rating}</h3>
            <p>Summary : {currElement.summary}</p>
            <p>Genre : {currElement.genre.join(", ")}</p>
            <p>Cast: {currElement.cast.join(", ")}</p>
            <a href={currElement.watch_url} target="_blank" >
              <button>Watch Now</button>
            </a>
          </li>
          );
        })
      }
    </ul>
  );
};

export default CartoonSeries;

// work with same src/k.jsx