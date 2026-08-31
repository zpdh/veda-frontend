import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePlayerNames } from "../hooks/usePlayerNames";
import { SearchBar } from "../components/SearchBar";

export function SearchPlayerPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("player") ?? "");
  const playerNames = usePlayerNames().data?.players ?? [];

  const handleSelect = (name: string) => {
    navigate(`/players/${name}`);
  };

  return (
    <div className="flex min-h-[70vh] pt-20 justify-center px-4">
      <div className="w-full max-w-xl">
        <h1 className="mb-2 text-center text-2xl font-semibold text-veda-text">
          Search Players
        </h1>

        <p className="mb-6 text-center text-sm text-veda-text-muted">
          Find a player to view their profile.
        </p>

        <SearchBar
          usernames={playerNames}
          value={search}
          onChange={setSearch}
          onSubmit={handleSelect}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
