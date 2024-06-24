import { useLoaderData } from "react-router-dom";
import styles from "./Root.module.css";
import ChallengeItem from "../components/ChallengeItem";

export interface ChallengeProps {
  attempts: number;
  id: number;
  title: string;
  details: string;
  createdAt: string; // investigate adding a type guard for date
  updatedAt: string;
}

function Root() {
  const { challenges } = useLoaderData() as { challenges: ChallengeProps[] };
  return (
    <div className={styles.Root__container}>
      <p className={styles.Root__blurb}>
        This isn't a library of components to just copy paste. This library shows you the key to how it was implemented.
      </p>
      <p className={styles.Root__blurb}>
        Browse the library of common React UI components to see example code with an explanation on the key to making it work.
      </p>
      <ul className={styles.Root__list}>
        {challenges &&
          challenges.map((challenge: ChallengeProps) => {
            return <ChallengeItem key={challenge.id} {...challenge} />;
          })}
      </ul>
    </div>
  );
}

export default Root;
