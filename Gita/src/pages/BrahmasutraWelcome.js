import { Link } from "react-router-dom";
export default function BrahmasutraWelcome() {
  const imageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Welcome to Brahma Sutra!</h1>
                <div className="field-items">
                  <p className="size-7">
                    Read Badrayana’s Brahma Sutra, the authoritative text that
                    systematically expounds Vedanta philosophy. Also read Adi
                    Sankara’s monumental commentary on this work. These Sanskrit
                    texts can be viewed on this website in any of 11 Indian
                    language scripts, including Roman. Other features of this
                    website include an easy-to-use navigation bar, 2-book view
                    for comparative study, PDF files for downloading the texts
                    and an annotated list of related websites. Welcome to the
                    Brahma Sutra website!{" "}
                  </p>
                  <div style={imageStyle}>
                    <img
                      src="/static/images/img/welcome.png"
                      draggable="false"
                      alt="welcome banner"
                    />
                  </div>
                  <h1>
                    <Link to="/brahmasutra/content">View Sutras</Link>
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
