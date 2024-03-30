import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {profile} from '../../DATA/MoreData';
export default function Team() {
  useEffect(() => {
    document.title = 'Our Team | Gita';

    return () => {
      document.title = 'Our Team | Gita';
    };
  }, []);
  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0px 0px 20px 1px',
  };
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <h1 className="pa-title">Our Team</h1>
                <div className="fi-items">
                  <div>
                    <h1 className="size-6 color-dark-blue">Meet Our Team</h1>
                    <p className="size-7">
                      We&apos;re a dedicated group of individuals who have
                      united to conceive and administer the content management
                      system that empowers our digital repository. Our diverse
                      skills and expertise have played an integral role in
                      molding the project into its current form.
                    </p>

                    <div className="team-member">
                      <img
                        src={profile}
                        alt="Profile"
                        draggable="false"
                        style={imageStyle}
                      />
                      <h2 className="size-6" style={{marginTop: '10px'}}>
                        <Link
                          to="https://in.linkedin.com/in/kuldeep1a?trk=public_profile_browsemap"
                          target="_blank">
                          Kuldeep Dhagnar
                        </Link>
                        <div className="size-10">Project Lead</div>
                      </h2>
                      <br />
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
