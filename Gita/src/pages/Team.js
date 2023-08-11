function TeamMember({ name, role }) {
  return (
    <div className="team-member">
      <h2 className="size-6">
        {name} <h1 className="size-10">{role}</h1>
      </h2>
      <br />
    </div>
  );
}

export default function Team() {
  const teamMembers = [
    {
      imgSrc: "team-member-1.jpg",
      name: "Kuldeep Dhagnar",
      role: "Project Lead",
    },
    {
      imgSrc: "team-member-3.jpg",
      name: "Internet",
      role: "Helper",
    },
  ];
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

                    {teamMembers.map((member, index) => (
                      <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                      />
                    ))}
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
