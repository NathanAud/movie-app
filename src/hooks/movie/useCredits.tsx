import { useEffect, useState } from "react";
import { getCredits, type Credits } from "../../services/movie";

export const useMovieCredits = (movieId: number) => {
  const [movieCredits, setCredits] = useState<Credits>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCredits(movieId);

        if (response) {
          setCredits(response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  return { movieCredits };
};
