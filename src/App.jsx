// import React from "react";

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
  return( <div>
    <img src="bg1.jpg" alt="image" width="40%" height="40%" />
    <h2>Name: Raahi Bus </h2>
    <h3>Rating:8.2</h3>
    <p>Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque qui laborum explicabo dignissimos, illum, repellendus neque impedit ab esse iste assumenda at quisquam, quo debitis.</p>
  </div>
  )
};


// todo 
// -> Each JSX expression must have one parent Element,
// which means if you try to return multiple Elements,
// React will throw an error.

// Every JSX tag needs to be closed. You can use
// self-closing tags for elements that don't have children
// e.g. <img scr="url" />