import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Featured from "./components/Featured";
import Experience from "./components/Experience";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import { profile } from "./data/profile";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Featured />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <footer className="ui border-t border-line py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
