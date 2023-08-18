import { Link, Outlet } from "react-router-dom";

export default function QuickLinks() {
  return (
    <>
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
                          <Link to="/srimadContent">
                            <strong>Srimad BhagavadGita</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="/othergitas">
                            <strong>Other Gitas</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">
                            <strong>Ramcharitmanas x</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="">
                            <strong>Valmiki Ramayanam x</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/brahmasutraContent">
                            <strong>Brahma Sutra</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to="/yogasutraContent">
                            <strong>Yoga Sutra</strong>
                          </Link>
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
