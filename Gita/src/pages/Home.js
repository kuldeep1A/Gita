import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Home() {
  const colorx = {
    color: "#a52a2a",
  };
  const colorgreen = {
    color: "green",
  };
  const background = {
    backgroundColor: "#ffffe0",
  };
  return (
    <>
      <div className="region-front-welcome">
        <div className="content">
          <span style={colorx}>
            <strong>
              <span style={background}>
                NOTICE: Users can edit content now. If you want to be an editor,
                please send your credentials with offical Website Maintained by
                IIT Kanpur.
              </span>
            </strong>
          </span>
        </div>
      </div>

      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Welcome to Gita Site!</h1>
                <div className="field-items">
                  <table className="homepage">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/srimad/intro">
                            <strong>Srimad BhagavadGita</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Other Gitas</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">
                            <strong>Ramcharitmanas</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Valmiki Ramayanam</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/brahmasutra/welcome">
                            <strong>Brahma Sutra</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Yoga Sutra</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">
                            <strong>Shri Ram Mangal Dasji</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Nepali Site</strong>
                          </Link>
                          <br />
                          (Contains Bhanubhakta's Ramayana)
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">
                            <strong>
                              Upanishads
                              <span style={colorgreen}>
                                <sup>NEW</sup>
                              </span>
                            </strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Sankara Site</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">
                            <strong>Concept Maps</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
