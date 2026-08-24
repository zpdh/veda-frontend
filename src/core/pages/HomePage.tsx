import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-veda-bg px-6">
      <div className="max-w-xl translate-y-[-15vh] text-center">
        <div className="text-center fade-in">
          <h1 className="text-8xl font-medium text-veda-text">Veda</h1>
          <p className="mt-4 text-lg text-veda-text-secondary">
            Your Monumenta data tracker.
          </p>
          <button
            onClick={() => navigate("/leaderboards")}
            className="mt-10 rounded-lg border border-veda-border bg-veda-surface px-6 py-3 text-sm text-veda-text hover:border-veda-text-secondary transition-colors duration-200 ease-out"
          >
            Leaderboards
          </button>
        </div>
      </div>
    </div>
  );
}
