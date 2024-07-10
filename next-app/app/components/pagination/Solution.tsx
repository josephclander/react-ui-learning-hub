"use client";

import { useState } from "react";

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
  { id: 10, name: "Bruce Wayne", JobTitle: "Entrepreneur" },
  { id: 11, name: "Clark Kent", JobTitle: "Journalist" },
  { id: 12, name: "Diana Prince", JobTitle: "Diplomat" },
  { id: 13, name: "Barry Allen", JobTitle: "Forensic Scientist" },
  { id: 14, name: "Hal Jordan", JobTitle: "Pilot" },
  { id: 15, name: "Arthur Curry", JobTitle: "Marine Biologist" },
  { id: 16, name: "Victor Stone", JobTitle: "Engineer" },
  { id: 17, name: "Oliver Queen", JobTitle: "Businessman" },
  { id: 18, name: "Billy Batson", JobTitle: "Student" },
  { id: 19, name: "Selina Kyle", JobTitle: "Security Specialist" },
  { id: 20, name: "Pamela Isley", JobTitle: "Botanist" },
];

const buttonStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "5px",
  cursor: "pointer",
};

// Prev & Next button version
// const Solution = () => {
//   const [start, setStart] = useState(0);
//   const SIZE = 6;
//   const max = dataArray.length;

//   const pageList = dataArray.slice(start, start + SIZE);
//   const totalPages = Math.ceil(max / SIZE);
//   const page = Math.floor(start / SIZE) + 1;
//   console.log({ start, page });

//   const handlePagination = (direction: 1 | -1) => {
//     setStart((prevStart) => prevStart + direction * SIZE);
//   };

//   return (
//     <div>
//       <ul>
//         {pageList.map((person) => {
//           return (
//             <li style={{ marginBottom: "10px" }} key={person.id}>
//               <h3>
//                 ID:{person.id} {person.name}
//               </h3>
//               <p>{person.JobTitle}</p>
//             </li>
//           );
//         })}
//       </ul>
//       <hr />
//       <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
//         {start > 0 && (
//           <button
//             onClick={() => handlePagination(-1)}
//             aria-label="Previous Page"
//             style={buttonStyle}
//           >
//             Prev
//           </button>
//         )}
//         {start + SIZE < max && (
//           <button
//             onClick={() => handlePagination(1)}
//             aria-label="Next Page"
//             style={buttonStyle}
//           >
//             Next
//           </button>
//         )}
//       </div>
//       <p style={{ marginTop: "10px" }}>
//         Page: {page} of {totalPages}
//       </p>
//     </div>
//   );
// };

// Page number version
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
          <li key={person.id} style={{ marginBottom: "10px" }}>
            <h3>
              ID: {person.id} - {person.name}
            </h3>
            <p>{person.JobTitle}</p>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "5px",
        }}
      >
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              ...buttonStyle,
              backgroundColor: page === currentPage ? "#7B8BDE" : "transparent",
            }}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Solution;
