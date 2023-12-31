import { Link, Outlet } from "react-router-dom";
import React from "react";
export default function Othergitas() {
  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Other Gitas</h1>
                <div className="field-items">
                  <div className="list size-5">
                    <div className="mb-15">
                      <Link to="/ashtavakra">Ashtavakra Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/avadhuta">Avadhuta Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/kapila">Kapila Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/sriram">Sriram Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/sruti">Sruti Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/uddhava">Uddhava Gita</Link>
                    </div>
                    <div className="mb-15">
                      <Link to="/vibhishana">Vibhishana Gita</Link>
                    </div>
                    <Outlet />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
