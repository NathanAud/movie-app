import MovieComponent from "../movie";
import type { Movie } from "../../services/movie";

interface Props {
  title: string;
  movies: Movie[]
}

export const Carousel = ({ title, movies }: Props) => {
  return (
    <div className="w-full px-10 flex flex-col gap-5" >
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-5 overflow-x-auto" style={{scrollbarWidth: "none"}}>
        {movies.map((movie: Movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
