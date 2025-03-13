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

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<FunFusion />} />

            <Route path="/profile" element={<Profile />} />
        
            <Route path="/dotspinner" element={<Dotspinner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
