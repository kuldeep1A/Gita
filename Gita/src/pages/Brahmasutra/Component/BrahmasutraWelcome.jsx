import { useEffect } from "react";
import { Link } from "react-router-dom";
import { welcome } from "../../../DATA/MoreData";
export default function BrahmasutraWelcome() {
  const imageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  useEffect(() => {
    document.title = "Brahmasutra Welcome | Gita";

    return () => {
      document.title = "Brahmasutra Welcome | Gita";
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">Welcome to Brahma Sutra!</h1>
                <div className="fi-items">
                  <p className="size-7">
                    Read Badrayana’s Brahma Sutra, the authoritative text that systematically
                    expounds Vedanta philosophy. Also read Adi Sankara’s monumental commentary on
                    this work. These Sanskrit texts can be viewed on this website in any of 11
                    Indian language scripts, including Roman.
                  </p>
                  <div style={imageStyle}>
                    <img src={welcome} draggable="false" alt="welcome banner" />
                  </div>
                  <h1>
                    <Link to="/brahmasutra">View Sutras</Link>
                  </h1>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
