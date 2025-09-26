import { useEffect, useState } from "react";
import { getSimilar, type Movie } from "../../services/movie";

export const useSimilarMovie = (movieId: number) => {
    const [similarMovies, setSimilarMovie] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSimilar(movieId);

                if (response) {
                    setSimilarMovie(response?.results);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, [movieId]);

    return { similarMovies };
    
};