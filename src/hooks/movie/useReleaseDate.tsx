import { useEffect, useState } from "react";
import { getReleaseDate, type ReleaseDateResult } from "../../services/movie";

export const useReleaseDate = (movieId: number) => {
    const [releaseDate, setReleaseDate] = useState<ReleaseDateResult[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getReleaseDate(movieId);

                if (response) {
                    setReleaseDate(response?.results);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, [movieId]);

    return { releaseDate };
    
};