import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EEEDFE" }}>
      <Header />
      <main className="mx-auto flex w-[70%] min-w-85 flex-col gap-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
