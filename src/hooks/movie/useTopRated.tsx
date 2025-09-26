import { useEffect, useState } from "react";
import { getTopRated, type Movie } from "../../services/movie";

export const useTopRatedMovie = () => {
  const [topRatedMovie, setTopRatedMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopRated();

        if (response) {
          setTopRatedMovie(response?.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { topRatedMovie };
};
