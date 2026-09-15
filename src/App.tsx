import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./Technology/TechnologyList";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <p className="py-10 text-center">Loading...</p>
      ) : (
        <TechnologyList technologies={technologies} />
      )}
    </>
  );
}

export default App;