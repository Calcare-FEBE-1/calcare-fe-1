import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import LogIn from "./pages/LogIn";
import Makanan from "./pages/Makanan";
import PilihMakanan from "./pages/PilihMakanan";
import Profil from "./pages/Profil";

import SignUp from "./pages/SingUp";
import TrackCal from "./pages/TrackCal";
import TrackKarbon from "./pages/TrackKarbon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/TrackCal" element={<TrackCal />} />
        <Route path="/Makanan" element={<Makanan />} />
        <Route path="/pilihMakanan" element={<PilihMakanan />} />
        <Route path="/TrackKarbon" element={<TrackKarbon />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/AboutUs" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
