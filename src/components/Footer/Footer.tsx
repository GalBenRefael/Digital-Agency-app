import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];
const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#",
    display: "Job",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>
              <a href="/home">
                M<span style={{ color: "#379cf6" }}>O</span>M ST
                <span style={{ color: "#379cf6" }}>O</span>CKS
              </a>
            </h2>
            <p className="description dis2">Grow with us</p>
            <p className="small_text description">
              Have questions or want to discuss your project?
              <br /> Email: contact@yourdomain.com
              <br /> Phone: (123) 456-7890 <br />
              Office Address: Visit us at our office to discuss your ideas in
              person. 123 Main Street, Suite 456 City, State, ZIP
            </p>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">Solutions</h3>

            <ul className="quick_link">
              {quickLinks01.map((item, index) => (
                <li className="quick_link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">Support</h3>

            <ul className="quick_link">
              {quickLinks02.map((item, index) => (
                <li className="quick_link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">Company</h3>

            <ul className="quick_link">
              {quickLinks03.map((item, index) => (
                <li className="quick_link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year}, Developed By G.B.R Web Development All rights
          reserved.{""}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
