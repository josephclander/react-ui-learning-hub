import { ChallengeProps } from "../routes/Root";

export const challengeByIdLoader = async (
  id: string
): Promise<ChallengeProps | null> => {
  if (!id) {
    console.error("No challenge ID provided");
    throw new Error("No challenge ID provided");
  }

  const url = `http://localhost:3001/challenges/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch challenge: ${response.status} ${response.statusText}`
      );
    }
    const challenge: ChallengeProps = await response.json();
    return challenge;
  } catch (error) {
    // Check if the error is an instance of Error and handle accordingly
    if (error instanceof Error) {
      throw new Error(
        `Error fetching challenge with ID ${id}: ${error.message}`
      );
    } else {
      throw new Error(
        `An unexpected error occurred while fetching challenge with ID ${id}`
      );
    }
  }
};
