export const solutionCode = `import { useState, useEffect } from "react";

// types
type userProps = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
};

type allUserProps = userProps[];

type APIResponse = {
  results: userProps[];
};

// function
const Solution = () => {
  const { users, isLoading, error } = useFetchUsers();

  return (
    <div>
      <h2>Data</h2>
      <p>
        The following data is sourced from{" "}
        <a href="https://randomuser.me">Random User Generator</a>.
      </p>
      <p>Refresh the page to see the loading animation.</p>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {users && users.map((user) => <User key={user.email} {...user} />)}
      </ul>
    </div>
  );
};

export default Solution;

// display user
const User = (user: userProps) => {
  return (
    <li>
      {user?.name?.title} {user?.name?.first} {user?.name?.last}
    </li>
  );
};

// fetch data
const fetchUserData = async (): Promise<allUserProps> => {
  const response = await fetch("https://randomuser.me/api?results=5&nat=gb");

  if (!response.ok) throw Error("Error fetching data");

  const data: APIResponse = await response.json();
  return data.results;
};

// custom hook
function useFetchUsers() {
  const [users, setUsers] = useState<allUserProps>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchUserData();
        if (results.length > 0) {
          setUsers(results);
          setError(null);
        } else {
          throw Error("No results found.");
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occured"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { users, isLoading, error };
}
`;
