import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const sfj = document.querySelector("#edit-search-block-form");
    sfj.addEventListener("click", (e) => {
      console.log("Search not working on the server");
    });
    const sfjd = document.querySelector("#edit-submit");
    sfjd.addEventListener("click", (e) => {
      console.log("Search not working on the server");
    });
  });

  return (
    <>
      <div className="header_wrapper">
        <div className="inner_header_wrapper">
          <header id="header" role="banner">
            <div className="top_left">
              <div id="logo">
                <Link to="/" title="Home">
                  <img src="./static/images/gita.jpg" alt="Gita" />
                </Link>
              </div>
            </div>

            <div className="top_right">
              <div className="region region-search">
                <div id="block-search-form" className="block block-search">
                  <div className="content">
                    <form action="" id="search-block-form">
                      <div>
                        <div className="container-inline">
                          <div className="form-item form-type-textfield form-item-search-block-form">
                            <input
                              title="Search are not working on the server"
                              type="text"
                              className="form-text"
                              id="edit-search-block-form"
                            />
                          </div>
                          <div
                            className="form-actions form-wrapper"
                            id="edit-actions"
                          >
                            <input
                              type="submit"
                              id="edit-submit"
                              name="op"
                              value="Search"
                              className="form-submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </header>
        </div>

        <div className="menu_wrapper">
          <nav id="main-menu" role="navigation">
            <Link to="#" className="nav-toggle" onClick={handleToggleMenu}>
              Navigation
            </Link>
            <div className="menu-navigation-container">
              <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <li className="first leaf">
                  <Link
                    to="/"
                    title=""
                    className="active"
                    onClick={handleToggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="leaf" onClick={handleToggleMenu}>
                  <Link to="/about">About Website</Link>
                </li>
                <li className="leaf" onClick={handleToggleMenu}>
                  <Link to="/history">History</Link>
                </li>
                <li className="leaf" onClick={handleToggleMenu}>
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
                      <Link to="/srimad/content" title="Srimad BhagavadGita">
                        Srimad BhagavadGita
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link to="/srimad/intro" title="Introduction">
                            Introduction
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/srimad/content" title="Srimadn Content">
                            Content
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="" title="Chapterwise Shlokas">
                            Chapterwise Shlokas
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/srimad/textdetails" title="Text Details">
                            Text Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded">
                      <Link to="/othergitas/list" title="Other Gitas">
                        Other Gitas
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link to="/ashtavakra/content" title="Ashtavakra Gita">
                            Ashtavakra Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/avadhuta/content" title="Avadhuta Gita">
                            Avadhuta Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/kapila/content" title="Kapila Gita">
                            Kapila Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/sriram/content" title="Sriram Gita">
                            Sriram Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/sruti/content" title="Sruti Gita">
                            Sruti Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/uddhava/content" title="Uddhava Gita">
                            Uddhava Gita
                          </Link>
                        </li>
                        <li className="leaf">
                          <Link to="/vibhishana/content" title="Vibhishana Gita">
                            Vibhishana Gita
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded">
                      <Link
                        to="/brahmasutra/content"
                        title="Brahmasutra content"
                      >
                        BrahmaSutra (ब्रह्मसूत्र)
                      </Link>
                      <ul className="menu">
                        <li className="first leaf">
                          <Link to="/brahmasutra/welcome">Welcome</Link>
                        </li>
                        <li className="leaf">
                          <Link to="/brahmasutra/about">
                            About Brahma Sutra
                          </Link>
                        </li>
                        <li className="last leaf">
                          <Link
                            to="/brahmasutra/content"
                            title="Brahmasutra content"
                          >
                            Content
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="last expanded">
                      <Link to="yogasutra/content" title="Yogasutra content">
                        YogaSutra
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="leaf" onClick={handleToggleMenu}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="last leaf" onClick={handleToggleMenu}>
                  <Link to="/login" title="">
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
