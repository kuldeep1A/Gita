import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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

function App() {
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
            <Route path="/othergitas/list" element={<Othergitas />} />
            <Route path="/ashtavakra/content" element={<Ashtavakra />} />
            <Route path="/avadhuta/content" element={<Avadhuta />} />
            <Route path="/kapila/content" element={<Kapila />} />
            <Route path="/sriram/content" element={<Sriram />} />
            <Route path="/sruti/content" element={<Sruti />} />
            <Route path="/uddhava/content" element={<Uddhava />} />
            <Route path="/vibhishana/content" element={<Vibhishana />} />
            <Route path="/srimad/intro" element={<SrimadIntro />} />
            <Route path="/srimad/content" element={<Srimad />} />
            <Route path="/srimad/textdetails" element={<TextDetails />} />
            <Route
              path="/brahmasutra/welcome"
              element={<BrahmasutraWelcome />}
            />
            <Route path="/brahmasutra/about" element={<BrahmasutraAbout />} />
            <Route path="/brahmasutra/content" element={<Brahmasutra />} />
            <Route path="/yogasutra/content" element={<Yogasutra />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Nopage />} />
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