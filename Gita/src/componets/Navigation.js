import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const valuesMatching = () => {
    let link = "";
    switch (searchValue.toLocaleLowerCase()) {
      case "about":
        link = "https://gita1a.web.app/about";
        break;
      case "history":
        link = "https://gita1a.web.app/history";
        break;
      case "team":
        link = "https://gita1a.web.app/Team";
        break;
      case "quick":
        link = "https://gita1a.web.app/quicklinks";
        break;
      case "ashtavakra":
        link = "https://gita1a.web.app/ashtavakra";
        break;
      case "avadhuta":
        link = "https://gita1a.web.app/avadhuta";
        break;
      case "kapila":
        link = "https://gita1a.web.app/kapila";
        break;
      case "sriram":
        link = "https://gita1a.web.app/sriram";
        break;
      case "sruti":
        link = "https://gita1a.web.app/sruti";
        break;
      case "uddhava":
        link = "https://gita1a.web.app/uddhava";
        break;
      case "vibhishana":
        link = "https://gita1a.web.app/vibhishana";
        break;
      case "intro":
        link = "https://gita1a.web.app/srimadIntro";
        break;
      case "srimad":
        link = "https://gita1a.web.app/srimad";
        break;
      case "text":
        link = "https://gita1a.web.app/srimadTextdetails";
        break;
      case "brahmasutrawelcome":
        link = "https://gita1a.web.app/brahmasutraWelcome";
        break;
      case "welcome":
        link = "https://gita1a.web.app/brahmasutraWelcome";
        break;
      case "brahmasutra":
        link = "https://gita1a.web.app/brahmasutra";
        break;
      case "brahma":
        link = "https://gita1a.web.app/brahmasutra";
        break;
      case "valmiki":
        link = "https://gita1a.web.app/valmikiramayana";
        break;
      case "valmikiramayana":
        link = "https://gita1a.web.app/valmikiramayana";
        break;
      case "yoga":
        link = "https://gita1a.web.app/yogasutra";
        break;
      case "yogasutra":
        link = "https://gita1a.web.app/yogasutra";
        break;
      case "contact":
        link = "https://gita1a.web.app/contact";
        break;
      case "login":
        link = "https://gita1a.web.app/login";
        break;
      case "other":
        link = "https://gita1a.web.app/othergitas";
        break;
      case "gita":
        link = "https://gita1a.web.app/othergitas";
        break;
      case "gitas":
        link = "https://gita1a.web.app/othergitas";
        break;
      default:
        link = "./NotFound";
        break;
    }

    setSearchValue("");
    return link;
  };

  const redirectSearchPage = () => {
    const link = valuesMatching();
    console.log(searchValue);
    window.open(link, "_self");
  };

  useEffect(() => {});

  return (
    <>
      <div>
        <div className="in_he_wrap">
          <header id="h" role="banner">
            <div className="top_l">
              <div id="logo">
                <Link to="/" title="Home">
                  <img src="./static/images/gita.jpg" alt="Gita" />
                </Link>
              </div>
            </div>

            <div className="top_r">
              <div className="region re-search">
                <div id="b-s-form">
                  <div className="content">
                    <div>
                      <div>
                        <div>
                          <input
                            type="text"
                            className="f-text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyUp={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                redirectSearchPage();
                              }
                            }}
                          />
                        </div>
                        <div id="edit-actions">
                          <button
                            onClick={redirectSearchPage}
                            type="button"
                            name="Search Button"
                            className="f-submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </header>
        </div>

        <div className="me_wrap">
          <nav id="main-me" role="navigation">
            <Link to="#" className="nav-toggle" onClick={handleToggleMenu}>
              Navigation
            </Link>
            <div className="menu-navigation-container">
              <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <li className="first leaf m">
                  <Link
                    to="/"
                    title=""
                    className="active"
                    onClick={handleToggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="leaf m" onClick={handleToggleMenu}>
                  <Link to="/about">About Website</Link>
                </li>
                <li className="leaf m" onClick={handleToggleMenu}>
                  <Link to="/history">History</Link>
                </li>
                <li className="leaf m" onClick={handleToggleMenu}>
                  <Link to="/team">Our Team</Link>
                </li>
                <li className="expanded">
                  <Link
                    to="/QuickLinks"
                    title=""
                    className="active"
                    onClick={handleToggleMenu}
                  >
                    Quick Links
                  </Link>
                  <ul className="menu">
                    <li className="first expanded">
                      <Link to="/srimad" title="Srimad BhagavadGita">
                        Srimad BhagavadGita
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link to="/srimadIntro" title="Introduction">
                            Introduction
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/srimad" title="Srimadn Content">
                            Content
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="" title="Chapterwise Shlokas">
                            Chapterwise Shlokas
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/srimadTextdetails" title="Text Details">
                            Text Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded">
                      <Link to="/othergitas" title="Other Gitas">
                        Other Gitas
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link to="/ashtavakra" title="Ashtavakra Gita">
                            Ashtavakra Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/avadhuta" title="Avadhuta Gita">
                            Avadhuta Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/kapila" title="Kapila Gita">
                            Kapila Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/sriram" title="Sriram Gita">
                            Sriram Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/sruti" title="Sruti Gita">
                            Sruti Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/uddhava" title="Uddhava Gita">
                            Uddhava Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/vibhishana" title="Vibhishana Gita">
                            Vibhishana Gita
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded">
                      <Link to="/brahmasutra" title="Brahmasutra content">
                        BrahmaSutra (ब्रह्मसूत्र)
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link title="Welcome" to="/brahmasutraWelcome">
                            Welcome
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/brahmasutraAbout">About Brahma Sutra</Link>
                        </li>
                        <li className="last leaf">
                          <Link to="/brahmasutra" title="Brahmasutra content">
                            Content
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="last expanded">
                      <Link to="yogasutra" title="Yogasutra content">
                        YogaSutra
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="leaf m" onClick={handleToggleMenu}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="last leaf m" onClick={handleToggleMenu}>
                  <Link to="/login" title="Admin Server">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="clear"></div>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
