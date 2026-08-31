import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./core/components/AppLayout";
import { LeaderboardPage } from "./features/leaderboard/pages/LeaderboardPage";
import { HomePage } from "./core/pages/HomePage";
import { SearchPlayerPage } from "./features/player/pages/SearchPlayerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout />}>
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/players" element={<SearchPlayerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
