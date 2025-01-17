import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Tournament from "./pages/Tournament";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/tournament" element={<Tournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
