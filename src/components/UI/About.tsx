import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "We kick-start every project with in-depth discussions to understand your objectives and audience. We plan meticulously to ensure every aspect aligns with your vision.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "LOur dedicated team is a blend of skilled professionals – developers, designers, marketers – each bringing their expertise to the table for a comprehensive solution.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "We understand that issues can arise at any time. Our 24/7 support ensures you have a dedicated team ready to assist, no matter the hour.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight"> financial challenges</h2>
            <p className="description about_content_desc">
              Our team brings years of combined experience in web development,
              design, and digital marketing. We've honed our skills to deliver
              exceptional results tailored to your unique needs. We're not just
              another agency. We thrive on creativity and stay at the forefront
              of industry trends. Our innovative solutions are designed to set
              you apart and drive your success.
            </p>

            <div className="choose_us-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about_img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
