import { AnimatePresence } from "framer-motion";
import Hero from "./Hero";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <div className="bg-[#1f0442] flex items-center justify-center  w-screen h-screen text-white">
                <Navbar></Navbar>
                <h1 className="text-4xl">Home page</h1>
              </div>
            }
          />
          <Route path="/about" element={<Hero />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
