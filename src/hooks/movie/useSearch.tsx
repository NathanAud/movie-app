import { useEffect, useState } from "react";
import { getSearch, type Movie } from "../../services/movie";

export const useSearchMovie = (query: string) => {
    const [searchResult, setSearchResult] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSearch(query);

                if (response) {
                    setSearchResult(response?.results);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, [query]);

    return { searchResult };
    
};