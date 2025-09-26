import type { Credits, Movie, ReleaseDateResponse, ResponseData, VideoResponse } from "./type";
import API from "../api";

async function get<T>(path: string) {
    const response = await API.get(path);
    
    try {
        if (response.status === 200) {
            return response.data as T;
        }
    } catch (error: any) {
        console.error(error);
    }   
}

export const getPopular = async () => {
    return get<ResponseData>('movie/popular');
}

export const getTopRated = async () => {
    return get<ResponseData>('movie/top_rated');
}

export const getCredits = async (movieId: number) => {
    return get<Credits>(`movie/${movieId}/credits`);
}

export const getSimilar = async (movieId: number) => {
    return get<ResponseData>(`movie/${movieId}/similar`);
}

export const getDetails = async (movieId: number) => {
    return get<Movie>(`movie/${movieId}`);
}

export const getReleaseDate = async (movieId: number) => {
    return get<ReleaseDateResponse>(`movie/${movieId}/release_dates`);
}

export const getSearch = async (query: string) => {
    return get<ResponseData>(`search/movie?query=${encodeURIComponent(query)}`);
}

export const getVideos = async (movieId: number) => {
    return get<VideoResponse>(`movie/${movieId}/videos`);
}