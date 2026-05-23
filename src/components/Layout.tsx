import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CockpitBackground from "./CockpitBackground";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <CockpitBackground />
      <Header />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
