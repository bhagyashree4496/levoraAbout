import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import topImage from "./bg.jpg";
import bottomImage from "./3.webp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Try from "./Try";

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
      {/* <Try></Try> */}
    </>
  );
}
