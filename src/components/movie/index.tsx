import { Card } from "../card";
import type { Movie } from "../../services/movie";
import { Link, useNavigate } from "react-router";
import { Ratings } from "../ratings";

interface Props {
  movie: Movie;
}

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

const MovieComponent = ({ movie }: Props) => {
  if (movie.release_date === undefined) console.log(movie);
  return (
    <Link to={`/detail/${movie.id}`}>
      <Card color="" width="12rem" border="12px">
        <div className="aspect-[2/3] w-full">
          <img
            src={`${IMG_BASE}${movie.poster_path}`}
            alt="Movie Poster"
            className="rounded-xl w-full"
          />
        </div>
        <div className="bottom flex flex-col gap-1">
          <h1 className="font-semibold text-base truncate w-full">
            {movie.title}
          </h1>
          <div className="flex w-full text-sm">
            <div className="left flex gap-1 flex-1">
              {movie.release_date && <p>{movie.release_date.split("-")[0]}</p>}
            </div>
            <Ratings rating={movie.vote_average} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

// question: kenapa ada yang rafce ada yang rafc?
export default MovieComponent;
