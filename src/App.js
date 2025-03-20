import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fixed import
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FunFusion from "./Components/Fun-Fusion/Fun";
import Profile from "./Components/Profile/Profile";
import Dotspinner from "./Components/Fun-Fusion/Games/DotGame";
import Recipe from './Components/Recipes/Recipe'
import Jhatpat from "./Components/JhatPat Recipes/Jhatpat";
import SmartChef from "./Components/SmartChef/Smartchep";
import Mysterbox from "./Components/Fun-Fusion/MysteryBoxChallenge/MysteryBox";
import Cooking from "./Components/Fun-Fusion/CookingChallenge/Cooking";
import Spinner from './Components/Fun-Fusion/DotSpinner/Spinnergame';
import Shareas from "./Components/Home/Homepage/Shareas";
import Hacks from './Components/KitchenHacks/Kitchenhacks';
import Footer from './Components/Footer/Footer'
import "./App.css";

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
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/jhatpat" element={<Jhatpat />} />
            <Route path="/mysterybox" element={<Mysterbox />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/hacks" element={<Hacks />} />
            <Route path="/shareas" element={<Shareas />} />

          </Routes>
        </main>
        <SmartChef/>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;
