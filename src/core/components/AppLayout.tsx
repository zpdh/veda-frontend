import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-veda-bg">
      <Header />
      <main className="mx-auto flex w-[70%] min-w-85 flex-1 flex-col gap-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
