import { Link, useNavigate } from "react-router";
import { UserAvatar } from "../userAvatar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useToken } from "../../hooks/useToken";
import { Input } from "../input";
import { useRef, useState } from "react";

const Header = () => {
  const { logout } = useToken();
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setSearchBar(true);
    // wait for next render so the input is mounted
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <header className="flex w-full justify-between px-10 py-3 sticky top-0 bg-white z-50">
      <div className="flex items-center gap-5">
        <Link to="/" className="text-3xl font-extrabold">
          LOLFlix
        </Link>
        <Link to="/">Home</Link>
      </div>
      <div className="flex gap-5 items-center">
        <div
          className={`flex transition-all duration-300 ease-in-out ${
            searchBar ? "gap-5" : "gap-0"
          }`}
        >
          <div className="h-10 hover:cursor-pointer" onClick={handleClick}>
            <MagnifyingGlassIcon className="size-6 h-full" />
          </div>
          <Input
            onBlur={() => setSearchBar(false)}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className={`
                transition-all duration-300 ease-in-out
                 ${searchBar ? "w-48 opacity-100" : "w-0 opacity-0 p-0"}
                `}
          />
        </div>
        <UserAvatar />
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
