import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Mastering both front-end and back-end skills to create end-to-end solutions that cater to user needs and business requirements.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "Creating intuitive and visually engaging user interfaces that enhance user satisfaction and drive conversions.",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: "Creating custom visuals that add a unique touch to your website and help communicate complex ideas for your business",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Optimizing your website to rank higher in search engine results, driving organic traffic and improving visibility.",
  },
];

function Services() {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services-item" key={index}>
              <span className="service_icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
