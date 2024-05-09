import { Link } from "react-router-dom";
import { ChallengeProps } from "../routes/Root";
import styles from "./ChallengeItem.module.css";

const ChallengeItem = (challenge: ChallengeProps) => {
  return (
    <li
      className={`${styles.ChallengeItem__listItem} ${
        challenge.attempts > 0 && styles.ChallengeItem__listItem__attempted
      }`}
    >
      <Link to={`/challenge/${challenge.id}`}>
        <h3>{challenge.title}</h3>
      </Link>
    </li>
  );
};

export default ChallengeItem;
