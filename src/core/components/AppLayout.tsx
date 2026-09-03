import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="bg-img bg-img-main flex flex-col min-h-screen bg-veda-bg">
      <Header />
      <main className="mx-auto flex w-[80%] min-w-85 flex-1 flex-col gap-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
