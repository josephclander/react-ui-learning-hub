"use client";

import { useState } from "react";

const Solution = () => {
  const [rating, setRating] = useState(3);

  const getStarStyle = (isSelected: boolean) => ({
    cursor: "pointer",
    padding: "5px",
    fontSize: "24px",
    transform: isSelected ? "scale(1.2)" : "scale(1)",
    border: "none",
    backgroundColor: "transparent",
  });

  return (
    <div>
      <h3>Select Rating</h3>
      <ul style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
        {[1, 2, 3, 4, 5].map((index) => {
          const isSelected = rating >= index;

          return (
            <button
              aria-label={`Rating ${index} out of 5`}
              key={index}
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

export default Solution;
