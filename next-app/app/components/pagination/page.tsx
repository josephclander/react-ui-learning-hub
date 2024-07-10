import { info } from "./info";
import Solution from "./Solution";
import CodeStyling from "../../_components/CodeStyling";
import Explanation from "./Explanation";
import { solutionCode } from "./solutionCode";
import { solutionCss } from "./solutionCss";

const Component = () => {
  return (
    <main className="Component__container">
      <h1 className="Component__heading">{info && info.title}</h1>
      <p className="Component__details">{info && info.details}</p>
      <hr className="Component__divider" />
      <h2 className="Component__heading">Solution</h2>
      <div className="solution-container">
        <Solution />
      </div>
      <h2 className="Component__heading">Explanation</h2>
      <Explanation />
      <h2 className="Component__heading">Code</h2>
      <CodeStyling code={solutionCode} language="typescript" />
      <h2 className="Component__heading">Styling</h2>
      <CodeStyling code={solutionCss} language="css" />
    </main>
  );
};

export default Component;
