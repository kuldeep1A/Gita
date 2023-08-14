import { Link } from "react-router-dom";

export default function Team() {
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
                    <h1 className="size-6">Meet Our Team</h1>
                    <p className="size-7">
                      We're a dedicated group of individuals who have come
                      together to create and manage the content management
                      system that powers our college's digital repository. Our
                      diverse skills and expertise have shaped the project into
                      what it is today.
                    </p>

                    <div className="team-member">
                      <h2 className="size-6">
                        <Link
                          to="https://linkedin.com/in/kuldeep1a"
                          target="_blank"
                        >
                          Kuldeep Dhagnar
                        </Link>
                        <h1 className="size-10">Project Lead</h1>
                      </h2>
                      <br />
                      <h2 className="size-6">
                        Internet <h1 className="size-10">Helper</h1>
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
