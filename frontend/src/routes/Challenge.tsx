import { Navigate, useLoaderData } from "react-router-dom";

import solutionComponents from "../solutions/SolutionIndex";
import styles from "./Challenge.module.css";
import { ChallengeProps } from "./Root";

const Challenge = () => {
  const challenge = useLoaderData() as ChallengeProps;
  const SolutionComponent = solutionComponents[challenge.id];
  const attemptClass =
    challenge?.attempts > 0 ? `${styles.done}` : `${styles.todo}`;

  if (!challenge) {
    return <Navigate to={"*"} />;
  }

  return (
    <main className={styles.Challenge__container}>
      <h1 className={styles.Challenge__heading}>CHALLENGE {challenge.id}</h1>
      <h2 className={styles.Challenge__title}>{challenge.title}</h2>
      <button className={`${styles.Challenge__button} ${attemptClass}`}>
        {challenge?.attempts > 0 ? "DONE" : "TODO"}
      </button>
      <p className={styles.Challenge__details}>{challenge.details}</p>
      <hr className={styles.Challenge__divider} />
      {SolutionComponent ? <SolutionComponent /> : <p>No solution available</p>}
    </main>
  );
};

export default Challenge;
