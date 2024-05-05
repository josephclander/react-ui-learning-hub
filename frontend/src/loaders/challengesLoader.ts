import { ChallengeProps } from "../routes/Root";

type LoaderResponse = {
  challenges: ChallengeProps[];
};

export const challengesLoader = async (): Promise<LoaderResponse> => {
  const url = "http://localhost:3001/challenges";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch challenges: ${response.status} ${response.statusText}`
      );
    }
    const challenges: ChallengeProps[] = await response.json();
    return { challenges };
  } catch (error) {
    console.error("Error fetching challenges:", error);
    throw new Error("Error fetching challenges");
  }
};
