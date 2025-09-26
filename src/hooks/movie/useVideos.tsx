import { useEffect, useState } from "react";
import type { Video } from "../../services/movie/type";
import { getPopular } from "../../services/movie";
import { getVideos } from "../../services/movie/api";

export const useVideos = (movieId: number) => {
    const [movieVideo, setMovieVideo] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getVideos(movieId);

                if (response) {
                    setMovieVideo(response?.results);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetchData();
    }, [movieId]);

    return { movieVideo };
    
};