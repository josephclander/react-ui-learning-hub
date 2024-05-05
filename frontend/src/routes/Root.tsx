import styles from "./Root.module.css";
import { useState, useEffect } from "react";
import ChallengeItem from "../components/ChallengeItem";

export interface ChallengeProps {
  id: number;
  title: string;
  details: string;
}

function Root() {
  const [challenges, setChallenges] = useState<ChallengeProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/challenges");
        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [challenges]);

  return (
    <div className={styles.Root__container}>
      <p className={styles.Root__blurb}>
        Here are a bank of mini React challenges. Each aimed to be completed in
        less than 30 minutes.
      </p>
      <ul className={styles.Root__list}>
        {challenges &&
          challenges.map((challenge) => {
            return (
              <ChallengeItem key={challenge.id} {...challenge} />
            );
          })}
      </ul>
    </div>
  );
}

export default Root;
