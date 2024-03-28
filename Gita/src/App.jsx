import { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import ScrollRestoration from "./componets/ScrollRestoration";
import {
  About,
  Brahmasutra,
  BrahmasutraAbout,
  Contact,
  Nopage,
  HistoryCP,
  Home,
  QuickLinks,
  Login,
  Othergitas,
  Ashtavakra,
  Avadhuta,
  Kapila,
  Sriram,
  Sruti,
  Uddhava,
  Vibhishana,
  Srimad,
  TextDetails,
  Team,
  Valmikiramayana,
  Yogasutra,
} from "./pages/Pages";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import _set_session from "./Function/utils";
import "./App.css";

function App() {
  let _isDark = window.sessionStorage.getItem("isDark") === "true" ? true : false;
  if (window.sessionStorage.getItem("isDark") === null) {
    const _t_hours = new Date().getHours();
    if (_t_hours >= 19 || _t_hours < 7) {
      _isDark = true;
      _set_session();
    } else {
      _isDark = false;
    }
  }
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
            <Route path="/history" element={<HistoryCP />} />
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
            <Route path="/srimadIntro" element={<Srimad />} />
            <Route path="/srimad" element={<Srimad />} />
            <Route path="/srimadTextdetails" element={<TextDetails />} />
            <Route path="/brahmasutraWelcome" element={<Brahmasutra />} />
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

