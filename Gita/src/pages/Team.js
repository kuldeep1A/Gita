import { Link } from "react-router-dom";

export default function Team() {
  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    boxShadow: "0px 0px 20px 1px",
  };
  return (
    <>
      <div className="container">
        <div className="container-wrap">
          <div className="content-sidebar-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="page-title">Our Team</h1>
                <div className="field-items">
                  <div>
                    <h1 className="size-6 color-dark-blue">Meet Our Team</h1>
                    <p className="size-7">
                      We're a dedicated group of individuals who have united to
                      conceive and administer the content management system that
                      empowers our digital repository. Our diverse skills and
                      expertise have played an integral role in molding the
                      project into its current form.
                    </p>

                    <div className="team-member">
                      <img
                        src="./static/images/img/profile.jpg"
                        alt="Profile"
                        draggable="false"
                        style={imageStyle}
                      />
                      <h2 className="size-6">
                        <Link
                          to="https://linkedin.com/in/kuldeep1a"
                          target="_blank"
                        >
                          Kuldeep Dhagnar
                        </Link>
                        <div className="size-10">Project Lead</div>
                      </h2>
                      <br />
                      <h2 className="size-6">
                        Internet <span className="size-10">Helper</span>
                      </h2>
                      <br />
                    </div>
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
