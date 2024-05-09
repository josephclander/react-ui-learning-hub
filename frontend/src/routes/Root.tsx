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
        Here are a bank of mini React challenges. Each aimed to be completed in
        less than 30 minutes.
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
