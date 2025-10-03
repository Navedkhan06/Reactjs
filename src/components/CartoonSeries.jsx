import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const CartoonSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {
        seriesData.map((currElement) => (
          <SeriesCard key={currElement.id} currElement={currElement} />
        ))
      }
    </ul>
  );
};

export default CartoonSeries;
