export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-veda-border px-16 py-3">
      <a href="/" className="text-2xl font-medium text-veda-text">
        Veda
      </a>
      <div className="flex items-center gap-12">
        <a
          href="/leaderboards"
          className="text-base text-veda-text-secondary hover:text-veda-text"
        >
          Leaderboards
        </a>        <a
          href="/players"
          className="text-base text-veda-text-secondary hover:text-veda-text"
        >
          Players
        </a>
      </div>
    </header>
  );
}
