import CartoonSeries from "./components/CartoonSeries";
// import "./components/Cartoon.css";
import "./components/Cartoon.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

import { Sibling, State } from "./components/hooks/State";
export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Cartoon Series</h1> */}
      {/* <CartoonSeries />; */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      <State />
      <Sibling/>
    </section>
  )
};
