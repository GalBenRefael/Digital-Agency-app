import "../../styles/team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";

const teamData = [
  {
    imgUrl: team01,
    name: "Courtny Hurry",
    position: "Product Manager",
  },
  {
    imgUrl: team02,
    name: "Lindas Walton",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Harry Martin",
    position: "Product Designer",
  },
  {
    imgUrl: team02,
    name: "Lisa Cooper",
    position: "CEO & Sr. Developer",
  },
];

function Team() {
  return (
    <section className="our_team">
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle">Our team</h6>
          <h2>
            Meet our <span className="highlight">Our team</span>
          </h2>
        </div>

        <div className="team_wrapper">
          {teamData.map((item, index) => (
            <div className="team_item" key={index}>
              <div className="team_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team_details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team_member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
