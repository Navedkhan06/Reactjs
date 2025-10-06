import { DerivedState } from "./components/DerivedState";
import {State} from "./components/hooks/State"

export const App = () => {
  return (
    <section className="container">
      {/* <State />  */}
      <DerivedState />
    </section>
  );
};