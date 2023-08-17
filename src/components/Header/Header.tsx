import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
const nav_links = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

function Header(theme: any, toggleTheme: any) {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav_wrapper">
            <div className="logo">
              <h2>
                <a href="/home">
                  M<span style={{ color: "#379cf6" }}>O</span>M ST
                  <span style={{ color: "#379cf6" }}>O</span>CKS
                </a>
              </h2>
            </div>

            {/* ============ navigation ===============*/}

            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="menu_item" key={index}>
                    {location.pathname === "/home" && (
                      <a href={item.path} className="menu_link">
                        {item.display}
                      </a>
                    )}
                  </li>
                ))}
                <NavLink to="/privacy" className="menu_link">
                  Privacy Policy
                </NavLink>
              </ul>
            </div>

            <div>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
