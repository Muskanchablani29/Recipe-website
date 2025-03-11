import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FunFusion from "./Components/Fun-Fusion/Fun";
import Profile from "./Components/Profile/Profile";
import Dotspinner from "./Components/Fun-Fusion/Games/DotGame";
import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <>
<<<<<<< HEAD
    <Funone/>
    </>
    
=======
    <h1>  hello</h1>
    </>
>>>>>>> 4d76e9e2a4ae66e6b992514ed0119782eb29faa9
=======
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
>>>>>>> Muskan
  );
}

export default App;
