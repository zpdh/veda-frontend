import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./core/components/AppLayout";
import { LeaderboardPage } from "./features/leaderboard/pages/LeaderboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/leaderboards" replace />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
