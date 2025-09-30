// import React from "react";

import React from "react";



// export const App = () => {
//   return <h1>Hello, Naved Khan</h1>
// };

// another ways

// export const App = () => {
//   return React.createElement('h1',null,"Hello, Mr. Khan");
// };


{/* <h1>Hello,Mr. Khan</h1>  */ }
// React.createElement('h1',null,"Hello, Mr. Khan");

// if we write javascript inside of html that is called jsx 

// card

export const App = () => {
  return (
    <React.Fragment>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
      <CartoonSeries/>
    </React.Fragment>

  );
};


// todo 
// -> Each JSX expression must have one parent Element,
// which means if you try to return multiple Elements,
// React will throw an error.

// Every JSX tag needs to be closed. You can use
// self-closing tags for elements that don't have children
// e.g. <img scr="url" />


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