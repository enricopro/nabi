import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Discover from "./Discover";
import Blog from "./Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  )
}