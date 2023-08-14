import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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
            <Route path="/srimad/intro" element={<SrimadIntro />} />
            <Route path="/srimad/content" element={<Srimad />} />
            <Route
              path="/brahmasutra/welcome"
              element={<BrahmasutraWelcome />}
            />
            <Route path="/brahmasutra/about" element={<BrahmasutraAbout />} />
            <Route path="/brahmasutra/content" element={<Brahmasutra />} />
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
