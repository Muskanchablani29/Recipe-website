import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Utensils, BookOpen, ShoppingCart, User, LogOut } from "lucide-react";
import "./Navbar.css";
import logo from "./Images/Logo-bg.png";

const menuItems = [
  { name: "Home", icon: <Home size={24} />, link: "/" },
  { name: "About", icon: <Utensils size={24} />, link: "/about" },
  { name: "Contact", icon: <BookOpen size={24} />, link: "/contact" },
  { name: "Fun Fusion", icon: <ShoppingCart size={24} />, link: "/fun" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      console.log("Raw user data from localStorage:", userData); // Debugging
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          console.log("Parsed user object:", parsedUser); // Debugging
          setUser(parsedUser);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("user");
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowProfileDropdown(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target;
      const isFullyScrolled =
        Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;
      setIsScrolling(!isFullyScrolled);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  const ProfileIcon = ({ user }) => {
    if (!user || !user.name) {
      return <User size={24} />;
    }
    return (
      <div
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: "#FAEBD7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8B4513",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {user.name.charAt(0).toUpperCase()}
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
            <li className="menu-item-container profile-container">
              <div
                className={`menu-item ${isActive("/profile") ? "active" : ""}`}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <span className="menu-icon">
                  <ProfileIcon user={user} />
                </span>
                <span className="menu-label">
                  {user && user.name ? user.name.split(" ")[0] : "Profile"}
                </span>
              </div>
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <Link to="/profile" className="dropdown-item">
                    <User size={20} />
                    <span>Profile</span>
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item">
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}