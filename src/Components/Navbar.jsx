import { useState, useRef, useEffect, useMemo } from "react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Home,
  ChefHat,
  Phone,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout, deleteAccount } from "../Reducers/authReducers";
import "./Navbar.css";
import logo from "./Images/Logo-bg copy.png";

const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  FUN: '/fun',
  PROFILE: '/profile'
};

const menuItems = [
  { name: "Home", icon: <Home size={24} />, link: ROUTES.HOME },
  { name: "About", icon: <ChefHat size={24} />, link: ROUTES.ABOUT },
  { name: "Contact", icon: <Phone size={24} />, link: ROUTES.CONTACT },
  { name: "Fun Fusion", icon: <Sparkles size={24} />, link: ROUTES.FUN },
];

const ProfileIcon = React.memo(({ user }) => {
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
});

const ProfileSection = React.memo(({ 
  user, 
  isLoggedIn, 
  expanded, 
  showMenu, 
  setShowMenu, 
  handleLogout, 
  handleDeleteAccount 
}) => {
  if (!isLoggedIn || !user) {
    return (
      <Link to="/profile" className="profile-link">
        <User size={24} />
        {expanded && <span>Profile</span>}
      </Link>
    );
  }

  return (
    <div className="user-menu">
      <button 
        className="username-button" 
        onClick={() => setShowMenu(!showMenu)}
      >
        <ProfileIcon user={user} />
        {expanded && user.username && <span className="username-text">{user.username}</span>}
      </button>
      {showMenu && (
        <div className="user-dropdown">
          <Link 
            to="/profile" 
            className="profile-option"
            onClick={() => setShowMenu(false)}
          >
            <User size={16} />
            My Profile
          </Link>
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={16} />
            Logout
          </button>
          <button className="delete-account-button" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
});

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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

  const handleLogout = () => {
    dispatch(logout());
    setShowMenu(false);
    navigate(ROUTES.PROFILE);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account permanently? This action cannot be undone.")) {
      dispatch(deleteAccount());
      setShowMenu(false);
      navigate(ROUTES.PROFILE);
    }
  };

  const isActive = (path) => location.pathname === path;

  const memoizedMenuItems = useMemo(() => menuItems.map((item, index) => (
    <li key={index} className="menu-item-container">
      <Link
        to={item.link}
        className={`menu-item ${isActive(item.link) ? "active" : ""}`}
      >
        <span className="menu-icon">{item.icon}</span>
        {expanded && <span className="menu-label">{item.name}</span>}
      </Link>
    </li>
  )), [expanded, location.pathname]);

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
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="menu-wrapper" ref={menuRef}>
          <ul className="menu-list">
            {memoizedMenuItems}
            <li className="profile-container">
              <div className="drawer-profile">
                <ProfileSection 
                  user={user}
                  isLoggedIn={isLoggedIn}
                  expanded={expanded}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                  handleLogout={handleLogout}
                  handleDeleteAccount={handleDeleteAccount}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
