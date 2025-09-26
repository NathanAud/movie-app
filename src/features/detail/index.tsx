import { useParams } from "react-router";
import { Carousel } from "../../components/carousel";
import { useMovieCredits } from "../../hooks/movie/useCredits";
import { useMovieDetails } from "../../hooks/movie/useDetails";
import { useSimilarMovie } from "../../hooks/movie/useSimilar";
import { Ratings } from "../../components/ratings";
import { CreditsDetail } from "../../components/movieCredits";
import { useReleaseDate } from "../../hooks/movie/useReleaseDate";
import { PlayButton } from "../../components/playButton";
import { useEffect, useMemo } from "react";
import { Button } from "../../components/button";
import { useVideos } from "../../hooks/movie/useVideos";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

const DetailScreen = () => {
  const movieId = +(useParams<{ movieId: string }>().movieId ?? -1);

  const { movieDetails } = useMovieDetails(movieId);
  const { movieCredits } = useMovieCredits(movieId);
  const { similarMovies } = useSimilarMovie(movieId);
  const { releaseDate } = useReleaseDate(movieId);
  const { movieVideo } = useVideos(movieId);

  // const { movieDetails } = useMemo(() => useMovieDetails(movieId), [movieId]);
  // const { movieCredits } = useMemo(() => useMovieCredits(movieId), [movieId]);
  // const { similarMovies } = useMemo(() => useSimilarMovie(movieId), [movieId]);
  // const { releaseDate } = useMemo(() => useReleaseDate(movieId), [movieId]);

  const getGenres = () => {
    return movieDetails?.genres
      .slice(0, 5)
      .map((v) => v.name)
      .join(", ");
  };

  const getCasts = () => {
    return movieCredits?.cast.slice(0, 5).map((v) => v.name) ?? [];
  };

  const getDirectors = () => {
    return (
      movieCredits?.crew
        .filter((v) => v.job === "Director")
        .slice(0, 5)
        .map((v) => v.name) ?? []
    );
  };

  const getRuntime = () => {
    const runtime = +(movieDetails?.runtime ?? 0);
    return runtime >= 60
      ? `${Math.floor(runtime / 60)}h ${runtime % 60}m`
      : `${runtime}m`;
  };

  const getAgeRating = () => {
    if (!releaseDate?.length) return "";

    const getCert = (code: string) =>
      releaseDate
        .find((v) => v.iso_3166_1 === code)
        ?.release_dates.find((v) => v.certification)?.certification;

    return getCert("ID") || getCert("US") || "";
  };

  const ageRating = getAgeRating();

  const trailerKey = movieVideo.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  )?.key;

  const trailerLink = trailerKey
    ? `https://www.youtube.com/watch?v=${trailerKey}`
    : null;

  return (
    <div className="flex flex-col gap-10 py-10 w-full">
      <div className="flex px-20 gap-10 flex-wrap justify-center">
        <img
          src={`${IMG_BASE}${movieDetails?.poster_path}`}
          alt={`${movieDetails?.title} Poster`}
          className="w-64 h-96 rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-5 flex-1 min-w-80">
          <h1 className="text-4xl font-bold">{movieDetails?.title}</h1>
          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col gap-4 flex-2 min-w-64">
              {movieDetails?.tagline && (
                <p className="italic">{`"${movieDetails?.tagline}"`}</p>
              )}
              <div>{getGenres()}</div>
              <div className="flex gap-4 flex-wrap">
                <p>{movieDetails?.release_date.split("-")[0]}</p>
                {ageRating && <p>{ageRating}</p>}
                <p>{getRuntime()}</p>
                <Ratings rating={movieDetails?.vote_average ?? ""} />
              </div>
              <p>{movieDetails?.overview}</p>
              <div className="flex gap-5">
                <PlayButton />
                {trailerLink && (
                  <Button
                    className="rounded-2xl"
                    onClick={() => window.open(trailerLink, "_blank")}
                  >
                    Watch Trailer
                  </Button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-1 min-w-64">
              <CreditsDetail title="Director" names={getDirectors()} />
              <CreditsDetail title="Cast" names={getCasts()} />
            </div>
          </div>
        </div>
      </div>
      <Carousel title="More Like This" movies={similarMovies} />
    </div>
  );
};

export default DetailScreen;
