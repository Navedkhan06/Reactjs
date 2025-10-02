import seriesData from "../api/seriesData.json";
const CartoonSeries = () => {
  return (
    <ul>
      <li>
        <div>
          <img src={seriesData[0].img_url} alt="image" width="30%" height="40%" />
        </div>
        <h2>Cartoon Name: {seriesData[0].name} </h2>
        <h3>Rating: {seriesData[0].rating}</h3>
        <p>Summary : {seriesData[0].summary}</p>
        <p>Genre : {seriesData[0].genre.join(", ")}</p>
        <p>Cast: {seriesData[0].cast.join(", ")}</p>
        <a href={seriesData[0].watch_url} target="_blank" >
          <button>Watch Now</button>
        </a>
      </li>
      <li>
        <div>
          <img src={seriesData[1].img_url} alt="image" width="30%" height="40%" />
        </div>
        <h2>Cartoon Name: {seriesData[1].name} </h2>
        <h3>Rating: {seriesData[1].rating}</h3>
        <p>Summary : {seriesData[1].summary}</p>
        <p>Genre : {seriesData[1].genre}</p>
        <p>Cast: {seriesData[1].cast}</p>
        <a href={seriesData[1].watch_url} target="_blank" >
          <button>Watch Now</button>
        </a>
      </li>
    </ul>
  );
};

export default CartoonSeries;
