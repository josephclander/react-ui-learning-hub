export const solutionCode = `import { useState } from "react";
import styles from "./Solution.module.css";

const programmingLanguages = [
  "C",
  "C#",
  "C++",
  "Go",
  "Java",
  "JavaScript",
  "Kotlin",
  "Perl",
  "PHP",
  "Python",
  "R",
  "Ruby",
  "Rust",
  "SQL",
  "Swift",
  "TypeScript",
];

const Solution = () => {
  const [input, setInput] = useState("");
  const [highlightedSuggestion, setHighlightedSuggestion] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
    const updatedList = programmingLanguages.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    // Set the first suggestion for the autocomplete hint
    if (updatedList.length > 0 && value) {
      setHighlightedSuggestion(updatedList[0]);
    } else {
      setHighlightedSuggestion("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // When the Tab key is pressed
    if (event.key === "Tab" && highlightedSuggestion) {
      event.preventDefault(); // Prevent focus shift
      setInput(highlightedSuggestion); // Set the input to the full suggestion
      setHighlightedSuggestion(""); // Clear the autocomplete suggestion
    }
  };

  return (
    <>
      <label className={styles.label} htmlFor="language">
        Input your main programming language
      </label>
      <div className={styles.autocompleteWrapper}>
        <input
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
          className={styles.input}
          type="text"
          id="language"
        />
        {highlightedSuggestion && (
          <div className={styles.autocompleteSuggestion}>
            <span className={styles.inputText}>{input}</span>
            <span className={styles.greyText}>
              {highlightedSuggestion.slice(input.length)}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Solution;
`;
