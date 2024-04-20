import {useEffect, useState} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ReactGA from 'react-ga';
import ScrollRestoration from './componets/ScrollRestoration';
import {
  About,
  Brahmasutra,
  BrahmasutraAbout,
  BrahmasutraWelcome,
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
  SriIntro,
  TextDetails,
  Team,
  Valmikiramayana,
  Yogasutra,
  Workspace,
} from './pages/Pages';
import Navigation from './componets/Navigation';
import Footer from './componets/Footer';
import {_isDark} from './Function/utils';
import './App.css';
import {_getAuth} from './Function/auth/auth';
function App() {
  const [isWorkspace, setWorkspace] = useState(false);
  useEffect(() => {
    _getAuth().then(d => setWorkspace(d));
    if (_isDark) {
      document.body.classList.add('_d-mode');
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path='/' element={<Navigation isWorkspace={isWorkspace} />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/history' element={<HistoryCP />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/quicklinks' element={<QuickLinks />} />
            <Route path='/othergitas' element={<Othergitas />} />
            <Route path='/ashtavakra' element={<Ashtavakra />} />
            <Route path='/avadhuta' element={<Avadhuta />} />
            <Route path='/kapila' element={<Kapila />} />
            <Route path='/sriram' element={<Sriram />} />
            <Route path='/sruti' element={<Sruti />} />
            <Route path='/uddhava' element={<Uddhava />} />
            <Route path='/vibhishana' element={<Vibhishana />} />
            <Route path='/srimadIntro' element={<SriIntro />} />
            <Route path='/srimad' element={<Srimad />} />
            <Route path='/srimadTextdetails' element={<TextDetails />} />
            <Route
              path='/brahmasutraWelcome'
              element={<BrahmasutraWelcome />}
            />
            <Route path='/valmikiramayana' element={<Valmikiramayana />} />
            <Route path='/brahmasutraAbout' element={<BrahmasutraAbout />} />
            <Route path='/brahmasutra' element={<Brahmasutra />} />
            <Route path='/yogasutra' element={<Yogasutra />} />
            <Route path='/contact' element={<Contact />} />
            {isWorkspace ? (
              <Route path='/workspace' element={<Workspace />} />
            ) : (
              <Route path='/login' element={<Login />} />
            )}

            <Route path='*' element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

const slfkjlsdfjlajdflafiewfTRACKING_IDdlfkjaojefiwjdfa = 'G-162B59M9LM';
ReactGA.initialize(slfkjlsdfjlajdflafiewfTRACKING_IDdlfkjaojefiwjdfa);
ReactGA.pageview(window.location.pathname + window.location.search);
