import { useState } from "react";
import { Home, Utensils, BookOpen, ShoppingCart, Info, User } from "lucide-react";
import "./Navbar.css";
import logo from "./Images/logo.png"; // Ensure you have a logo file in your project

const menuItems = [
  { name: "Home", icon: <Home />, link: "#" },
  { name: "Recipes", icon: <Utensils />, link: "#" },
  { name: "Categories", icon: <BookOpen />, link: "#" },
  { name: "Grocery List", icon: <ShoppingCart />, link: "#" },
  { name: "About", icon: <Info />, link: "#" },
  { name: "Profile", icon: <User />, link: "#" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-container">
      <nav
        className={`navbar ${expanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu-wrapper">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item-container">
                <a href={item.link} className="menu-item">
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
