import { usePopularMovie } from "../../hooks/movie/usePopular";
import { Carousel } from "../../components/carousel";
import { useTopRatedMovie } from "../../hooks/movie/useTopRated";
import { useMemo } from "react";

const HomeScreen = () => {
  const { popularMovie } = usePopularMovie();
  const { topRatedMovie } = useTopRatedMovie();

  return (
    <div className="flex flex-col gap-10 py-5">
      <Carousel title="Popular" movies={popularMovie} />
      <Carousel title="Top Rated" movies={topRatedMovie} />
    </div>
  );
};

export default HomeScreen;
