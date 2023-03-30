import "./styles.css";
import { BadButtonContainer } from "./BadButtonContainer";
import { GoodButtonContainer } from "./GoodButtonContainer";

export default function App() {
  return (
    <>
      <GoodButtonContainer buttonText="GOOD" />
      <BadButtonContainer buttonText="BAD" />
    </>
  );
}
