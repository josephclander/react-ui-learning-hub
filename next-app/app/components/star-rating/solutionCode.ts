export const solutionCode = `import { useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [rating, setRating] = useState(3);

  const getStarStyle = (isSelected: boolean) => ({
    transform: isSelected ? "scale(1.2)" : "scale(1)",
  });

  return (
    <div>
      <h3>Select Rating</h3>
      <ul className={styles.list}>
        {[1, 2, 3, 4, 5].map((index) => {
          const isSelected = rating >= index;

          return (
            <button
              aria-label={\`Rating $\{index} out of 5\`}
              key={index}
              className={styles.star}
              style={getStarStyle(isSelected)}
              onClick={() => setRating(index)}
            >
              {isSelected ? "★" : "☆"}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Solution;`;
