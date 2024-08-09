export const solutionCode = `import { useState } from "react";
import styles from "./Solution.module.css";

const dataArray = [
  { id: 1, name: "John Tar", JobTitle: "Mechanic" },
  { id: 2, name: "Alice Johnson", JobTitle: "Software Engineer" },
  { id: 3, name: "Sam Bridge", JobTitle: "Teacher" },
  { id: 4, name: "Lila Stone", JobTitle: "Graphic Designer" },
  { id: 5, name: "Raj Patel", JobTitle: "Accountant" },
  { id: 6, name: "Chris Lee", JobTitle: "Chef" },
  { id: 7, name: "Mia Wong", JobTitle: "Architect" },
  { id: 8, name: "Tom Hanks", JobTitle: "Actor" },
  { id: 9, name: "Sofia Cruz", JobTitle: "Nurse" },
];

const Solution = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(dataArray.length / pageSize);

  // create an array with the number of pages
  const pages = new Array(totalPages).fill(null).map((_, index) => index + 1);

  // range to show
  const pageList = dataArray.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {pageList.map((person) => (
          <li className={styles.listItem} key={person.id}>
            <h3>
              ID: {person.id} - {person.name}
            </h3>
            <p>{person.JobTitle}</p>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor: page === currentPage ? "#7B8BDE" : "transparent",
            }}
            className={styles.button}
            aria-label={\`Go to page $\{page}\`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Solution;`;
