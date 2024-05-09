import { Navigate, useLoaderData } from "react-router-dom";
import { useState } from "react";

import solutionComponents from "../solutions/SolutionIndex";
import styles from "./Challenge.module.css";
import { ChallengeProps } from "./Root";

const Challenge = () => {
  const challengeData = useLoaderData() as ChallengeProps;
  const [challenge, setChallenge] = useState<ChallengeProps>(challengeData);
  const [error, setError] = useState<string | null>(null);

  if (!challenge) {
    return <Navigate to={"*"} />;
  }

  const SolutionComponent = solutionComponents[challenge.id];

  const attemptClass =
    challenge?.attempts > 0 ? `${styles.done}` : `${styles.todo}`;

  const shouldShowButton = challenge?.attempts !== undefined;

  const handleClick = async () => {
    try {
      const method: string = challenge.attempts > 0 ? "decrement" : "increment";
      const response: Response = await fetch(
        `http://localhost:3001/challenges/${challenge.id}/${method}`,
        {
          method: "PUT",
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const updatedChallenge: ChallengeProps = await response.json();
      setChallenge(updatedChallenge);
      setError(null);
    } catch (error) {
      console.error("Error updating the challenge", error);
      setError("Failed to load data");
    }
  };

  return (
    <main className={styles.Challenge__container}>
      <h1 className={styles.Challenge__heading}>CHALLENGE {challenge.id}</h1>
      <h2 className={styles.Challenge__title}>{challenge.title}</h2>
      {error && <div>{error}</div>}
      {shouldShowButton && (
        <button
          onClick={handleClick}
          className={`${styles.Challenge__button} ${attemptClass}`}
        >
          {challenge?.attempts > 0 ? "DONE" : "TODO"}
        </button>
      )}
      <p className={styles.Challenge__details}>{challenge.details}</p>
      <hr className={styles.Challenge__divider} />
      {SolutionComponent ? <SolutionComponent /> : <p>No solution available</p>}
    </main>
  );
};

export default Challenge;
