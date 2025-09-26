import { useEffect, useState } from "react"
import { getPopular, type Movie } from "../../services/movie";

export const usePopularMovie = () => {
    const [popularMovie, setPopularMovie] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPopular();

                if (response) {
                    setPopularMovie(response?.results);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, []);

    return { popularMovie };
    
};