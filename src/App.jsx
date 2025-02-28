import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Tournament from "./pages/Tournament";
import TournamentDetail from "./pages/TournamentDetail";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournament-details" element={<TournamentDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
