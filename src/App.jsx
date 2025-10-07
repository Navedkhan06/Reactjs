// import { DerivedState } from "./components/DerivedState";
// import {State} from "./components/hooks/State"
import { LiftingState } from "./components/hooks/LiftStateUp";

export const App = () => {
  return (
    <section className="container">
      {/* <State />  */}
      {/* <DerivedState /> */}
      <LiftingState />
    </section>
  );
};