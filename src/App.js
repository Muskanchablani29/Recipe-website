import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FunFusion from "./Components/Fun-Fusion/Fun";
import Profile from "./Components/Profile/Profile";
import Dotspinner from "./Components/Fun-Fusion/Games/DotGame";
import "./App.css";



// This function returns a Router component with a div container, a Navbar component, and a main content area with Routes for different paths
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            // This Route renders the Home component when the path is "/"
            <Route path="/" element={<Home />} />
            // This Route renders the About component when the path is "/about"
            <Route path="/about" element={<About />} />
            // This Route renders the Contact component when the path is "/contact"
            <Route path="/contact" element={<Contact />} />
            // This Route renders the FunFusion component when the path is "/fun"
            <Route path="/fun" element={<FunFusion />} />
            // This Route renders the Profile component when the path is "/profile"
            <Route path="/profile" element={<Profile />} />
            // This Route renders the Dotspinner component when the path is "/dotspinner"
            <Route path="/dotspinner" element={<Dotspinner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
