import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Home, Utensils, BookOpen, ShoppingCart, User } from "lucide-react";
import "./Navbar.css";
import logo from "./Images/logo.png";

const menuItems = [
  { name: "Home", icon: <Home size={24} />, link: "/" },
  { name: "About", icon: <Utensils size={24} />, link: "/about" },
  { name: "Contact", icon: <BookOpen size={24} />, link: "/contact" },
  { name: "Fun Fusion", icon: <ShoppingCart size={24} />, link: "/fun" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [username, setUsername] = useState(""); // Add state for username
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in and get username from localStorage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsername(user.username);
    }
  }, []);

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

  // Profile icon component with first letter
  const ProfileIcon = ({ username }) => {
    if (!username) {
      return <User size={24} />;
    }
    return (
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "#FAEBD7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8B4513",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {username.charAt(0).toUpperCase()}
      </div>
    );
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
            {/* Profile/Username menu item */}
            <li className="menu-item-container">
              <Link
                to="/profile"
                className={`menu-item ${isActive("/profile") ? "active" : ""}`}
              >
                <span className="menu-icon">
                  <ProfileIcon username={username} />
                </span>
                <span className="menu-label">
                  {username || "Profile"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
