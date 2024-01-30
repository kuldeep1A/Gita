import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import ScrollRestoration from "./componets/ScrollRestoration";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import QuickLinks from "./pages/QuickLinks";
import SrimadIntro from "./pages/SrimadIntro";
import Srimad from "./pages/Srimad";
import Brahmasutra from "./pages/Brahmasutra";
import BrahmasutraWelcome from "./pages/BrahmasutraWelcome";
import BrahmasutraAbout from "./pages/BrahmasutraAbout";
import TextDetails from "./pages/TextDetails";
import Othergitas from "./pages/Othergitas";
import Yogasutra from "./pages/Yogasutra";
import Ashtavakra from "./pages/Ashtavakra";
import Avadhuta from "./pages/Avadhuta";
import Kapila from "./pages/Kapila";
import Sriram from "./pages/Sriram";
import Sruti from "./pages/Sruti";
import Uddhava from "./pages/Uddhava";
import Vibhishana from "./pages/Vibhishana";
import Valmikiramayana from "./pages/valmikiramayana";

function App() {
  const _isDark =
    window.sessionStorage.getItem("isDark") === "true" ? true : false;
  useEffect(() => {
    if (_isDark) {
      document.body.classList.add("_d-mode");
    }
  }, [_isDark]);
  return (
    <>
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/quicklinks" element={<QuickLinks />} />
            <Route path="/othergitas" element={<Othergitas />} />
            <Route path="/ashtavakra" element={<Ashtavakra />} />
            <Route path="/avadhuta" element={<Avadhuta />} />
            <Route path="/kapila" element={<Kapila />} />
            <Route path="/sriram" element={<Sriram />} />
            <Route path="/sruti" element={<Sruti />} />
            <Route path="/uddhava" element={<Uddhava />} />
            <Route path="/vibhishana" element={<Vibhishana />} />
            <Route path="/srimadIntro" element={<SrimadIntro />} />
            <Route path="/srimad" element={<Srimad />} />
            <Route path="/srimadTextdetails" element={<TextDetails />} />
            <Route
              path="/brahmasutraWelcome"
              element={<BrahmasutraWelcome />}
            />
            <Route path="/valmikiramayana" element={<Valmikiramayana />} />
            <Route path="/brahmasutraAbout" element={<BrahmasutraAbout />} />
            <Route path="/brahmasutra" element={<Brahmasutra />} />
            <Route path="/yogasutra" element={<Yogasutra />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

const slfkjlsdfjlajdflafiewfTRACKING_IDdlfkjaojefiwjdfa = "G-VXSDXFRQS7";
ReactGA.initialize(slfkjlsdfjlajdflafiewfTRACKING_IDdlfkjaojefiwjdfa);
ReactGA.pageview(window.location.pathname + window.location.search);
