import { useEffect } from "react";
import { useQuery } from "../../hooks/useQuery";
import { useNavigate } from "react-router";
import { useSearchMovie } from "../../hooks/movie/useSearch";
import MovieComponent from "../../components/movie";

const SearchScreen = () => {
  const navigate = useNavigate();
  const query = useQuery().get("q") ?? "";

  useEffect(() => {
    if (!query) navigate("/");
  }, [query]);

  const { searchResult } = useSearchMovie(query);

  return (
    <div className="flex flex-col p-10 gap-10">
    <h1 className="text-4xl font-bold">{`Results for: ${query}`}</h1>
      <div
        className="grid justify-center gap-10"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
      >
        {searchResult.map((v) => (
          <MovieComponent key={v.id} movie={v} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
