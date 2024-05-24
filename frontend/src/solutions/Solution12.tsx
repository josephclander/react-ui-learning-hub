import { useState } from "react";

const starStyle = {
  cursor: "pointer",
  padding: "5px",
};

const Solution12 = () => {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <h3>Select Rating</h3>
      <ul style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <li style={starStyle} onClick={() => setRating(index)}>
              {rating >= index ? "★" : "☆"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Solution12;
