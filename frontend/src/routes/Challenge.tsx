import { Navigate, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Highlight from "react-highlight";

import solutionComponents from "../solutions/SolutionIndex";
import styles from "./Challenge.module.css";
import { ChallengeProps } from "./Root";

const Challenge = () => {
  const challengeData = useLoaderData() as ChallengeProps;
  const [challenge] = useState<ChallengeProps>(challengeData);

  if (!challenge) {
    return <Navigate to={"*"} />;
  }

  const SolutionComponent = solutionComponents[challenge.id];

  return (
    <main className={styles.Challenge__container}>
      <h1 className={styles.Challenge__heading}>{challenge.title}</h1>
      <p className={styles.Challenge__details}>{challenge.details}</p>
      <hr className={styles.Challenge__divider} />
      {SolutionComponent ? <SolutionComponent /> : <p>No solution available</p>}
      <hr className={styles.Challenge__divider} />
      <h2>Code</h2>
      <div className="code-container">
        <Highlight className="language-typescript">
          {`import { useState } from "react";
import styles from "./Solution01.module.css";

const Solution01 = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.container}>
      <p className={styles.counter}>{count}</p>
      <div className={styles.buttons__container}>
        <button className={styles.button} onClick={handleAdd}>
          +
        </button>
        <button className={styles.button} onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
};

export default Solution01;
`}
        </Highlight>
      </div>
      <hr className={styles.Challenge__divider} />
      <h2>Styling</h2>
      <div className="code-container">
        <Highlight className="language-css">
          {`.container {
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  width: 200px;
  padding: 20px;
  align-items: center;
}

.counter {
  font-weight: bold;
}

.buttons__container {
  display: flex;
  gap: 10px;
}

.button {
  display: grid;
  place-content: center;
  padding: 5px;
  width: 30px;
  aspect-ratio: 1 / 1;
  line-height: 1;
}
`}
        </Highlight>
      </div>
      <hr className={styles.Challenge__divider} />
      <h2>Explanation</h2>
      <p>Hooks: useState</p>
      <p>
        note with handleAdd and handleMinus, you use the functional pattern that
        uses the previous state. This is key to ensure that you are using the
        version of state that you need to, just in case it gets updated from
        elsewhere.
      </p>
    </main>
  );
};

export default Challenge;
