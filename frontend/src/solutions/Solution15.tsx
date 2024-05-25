import { CSSProperties, useState } from "react";

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

const inputStyle: CSSProperties = {
  padding: "5px",
  margin: "30px 0",
};

const listStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  width: "500px",
  gap: "5px",
};

const liStyle: CSSProperties = {
  padding: "3px",
  border: "1px solid grey",
  borderRadius: "5px",
};

const Solution15 = () => {
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
      <input onChange={handleInput} type="text" style={inputStyle} />
      <ul style={listStyle}>
        {filteredList.map((boro) => (
          <li style={liStyle} key={boro}>
            {boro}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solution15;

// debounce function
// required to get type definitions from chatGPT!
// first iteration was too generic and not at all readable
// forced types for args for readability
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
    }, delay);
  };
}
