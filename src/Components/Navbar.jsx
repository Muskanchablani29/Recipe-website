// Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Utensils, BookOpen, ShoppingCart, User } from "lucide-react";
import "./Navbar.css";
import logo from "./Images/logo.png";

const menuItems = [
  { name: "Home", icon: <Home size={24} />, link: "/" },
  { name: "About", icon: <Utensils size={24} />, link: "/about" },
  { name: "Contact", icon: <BookOpen size={24} />, link: "/contact" },
  { name: "Fun Fusion", icon: <ShoppingCart size={24} />, link: "/fun" },
  { name: "Profile", icon: <User size={24} />, link: "/profile" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target;
      const isFullyScrolled =
        Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;

      if (isFullyScrolled) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar-container">
      <nav
        className={`navbar ${expanded ? "expanded" : "collapsed"} ${
          isScrolling ? "scrolling" : ""
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="menu-wrapper" ref={menuRef}>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item-container">
                <Link
                  to={item.link}
                  className={`menu-item ${isActive(item.link) ? "active" : ""}`}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
