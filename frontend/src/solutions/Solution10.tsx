import { useState, useEffect } from "react";

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
const Solution10: React.FC = () => {
  const { users, isLoading, error } = useFetchUsers();

  return (
    <div>
      <h2>Data</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {users && users.map((user) => <User key={user.email} {...user} />)}
    </div>
  );
};

export default Solution10;

// display user
function User(user: userProps) {
  return (
    <div>
      {user?.name?.title} {user?.name?.first} {user?.name?.last}
    </div>
  );
}

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
        // data.results = [];
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
