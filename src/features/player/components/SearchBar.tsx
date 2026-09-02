import React, { useState } from "react";

interface SearchBarProps {
  usernames: string[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const AUTOCOMPLETE_SUGGESTION_COUNT = 10;

export function SearchBar({
  usernames,
  value,
  placeholder,
  onChange,
  onSubmit,
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const suggestions =
    value.length > 0
      ? usernames
          .filter((name) => name.toLowerCase().startsWith(value))
          .slice(0, AUTOCOMPLETE_SUGGESTION_COUNT)
      : [];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.trim()) {
      event.preventDefault();
      onSubmit(value.trim());
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center rounded-sm border border-veda-sky bg-veda-surface/60 glass py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2 text-sm text-veda-text outline-none placeholder:text-veda-text-muted"
        />
      </div>

      {focused && suggestions.length > 0 && (
        <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-veda-border bg-veda-surface/60 fade-in-fast">
          {suggestions.map((sug) => (
            <button
              key={sug}
              type="button"
              onMouseDown={() => onSubmit(sug)}
              className="block w-full px-4 py-2 text-left text-sm text-veda-text hover:bg-veda-sky/60"
            >
              {sug}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
