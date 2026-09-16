import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./Technology/TechnologyList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load technologies. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer />

      <Hero />

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500"></div>

            <p className="mt-4 font-medium text-gray-600">
              Loading technologies...
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="font-medium text-red-500">
            {error}
          </p>
        </div>
      ) : (
        <TechnologyList
          technologies={technologies}
          stack={stack}
          setStack={setStack}
        />
      )}

      <Footer />
    </>
  );
}

export default App;