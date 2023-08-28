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

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Link to="/about">about</Link>} />
          <Route path="/about" element={<Hero />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
