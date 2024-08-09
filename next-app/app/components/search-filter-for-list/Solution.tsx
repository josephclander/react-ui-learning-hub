"use client";

import { CSSProperties, useState } from "react";
import styles from "./Solution.module.css";

const londonBoroughs = [
  "City of London",
  "Barking and Dagenham",
  "Barnet",
  "Bexley",
  "Brent",
  "Bromley",
  "Camden",
  "Croydon",
  "Ealing",
  "Enfield",
  "Greenwich",
  "Hackney",
  "Hammersmith and Fulham",
  "Haringey",
  "Harrow",
  "Havering",
  "Hillingdon",
  "Hounslow",
  "Islington",
  "Kensington and Chelsea",
  "Kingston upon Thames",
  "Lambeth",
  "Lewisham",
  "Merton",
  "Newham",
  "Redbridge",
  "Richmond upon Thames",
  "Southwark",
  "Sutton",
  "Tower Hamlets",
  "Waltham Forest",
  "Wandsworth",
  "Westminster",
];

const Solution = () => {
  const [filteredList, setFilteredList] = useState<string[]>(londonBoroughs);

  const debouncedSetFilteredList = debounceSetList((newList: string[]) => {
    setFilteredList(newList);
  });

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchInput = event?.target.value;
    const updatedList = londonBoroughs.filter((boro) =>
      boro.toLowerCase().includes(searchInput.toLowerCase())
    );

    debouncedSetFilteredList(updatedList);
  };

  return (
    <div>
      <h2>Type your local borough</h2>
      <input onChange={handleInput} type="text" className={styles.input} />
      <ul className={styles.list}>
        {filteredList.map((boro) => (
          <li className={styles.li} key={boro}>
            {boro}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solution;

// debounce function
function debounceSetList(
  // callback here is referencing setFilteredList
  // takes a string array and returns nothing
  callback: (newList: string[]) => void,
  delay: number = 500
): (newList: string[]) => void {
  let timer: number | null = null;

  return (newList: string[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(newList);
    }, delay) as unknown as number;
  };
}
