import { useState, useEffect } from "react";

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

const Solution10: React.FC = () => {
  const [users, setUsers] = useState<allUserProps>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api?results=5&nat=gb"
        );

        if (!response.ok) throw Error("Error fetching data");

        const data = await response.json();
        // data.results = [];
        if (data.results.length > 0) {
          setUsers(data.results);
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
  return (
    <div>
      <h2>Data</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        users.map((user) => {
          return (
            <div key={user?.email}>
              {user?.name?.title} {user?.name?.first} {user?.name?.last}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Solution10;
