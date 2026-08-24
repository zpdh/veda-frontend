export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-veda-border px-12 py-4">
      <a href="/" className="text-xl font-medium text-veda-text">
        Veda
      </a>
      <div>
        <a
          href="/leaderboards"
          className="text-sm text-veda-text-secondary hover:text-veda-text"
        >
          Leaderboards
        </a>
      </div>
    </header>
  );
}
