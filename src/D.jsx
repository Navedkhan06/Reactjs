
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
    </Fragment>

  );
};

const CartoonSeries = () => {
  return (
    <div>
      <div>
        <img src="doremon.jpg" alt="image" width="30%" height="40%" />
      </div>
      <h2>Cartoon Name: Doremon </h2>
      <h3>Rating:8.2</h3>
      <p>Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque qui laborum explicabo dignissimos, illum, repellendus neque impedit ab esse iste assumenda at quisquam, quo debitis.</p>
    </div>
  );
};