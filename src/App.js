import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Discover from "./Discover";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="discover" element={<Discover />} />
    </Routes>
  )
}