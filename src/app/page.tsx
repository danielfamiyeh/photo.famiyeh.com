import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="home h-screen">
      <Sidebar />
      <PhotoGrid photos={[]} />
    </main>
  );
}
