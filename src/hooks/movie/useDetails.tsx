import { useEffect, useState } from "react";
import { getDetails, type Movie } from "../../services/movie";

export const useMovieDetails = (movieId: number) => {
    const [movieDetails, setMovieDetails] = useState<Movie>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDetails(movieId);

                if (response) {
                    setMovieDetails(response);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, [movieId]);

    return { movieDetails };
    
};