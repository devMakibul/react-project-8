import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Weather from "./pages/Weather";
import Footer from "./components/Footer";


function App() {
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("mobile-menu");
  }
  return(
    <>
      <BrowserRouter>
        <nav>
          <div className="nav-left">
            <h4>Makibul</h4>
          </div>
          <div className="nav-right" id="menu">
            <NavLink to="/" onClick={() => toggleMenu()}>Home</NavLink>
            <NavLink to="/contact" onClick={() => toggleMenu()}>Contact</NavLink>
            <NavLink to="/education" onClick={() => toggleMenu()}>Education</NavLink>
            <NavLink to="/skills" onClick={() => toggleMenu()}>Skills</NavLink>
            <NavLink to="/weather" onClick={() => toggleMenu()}>Weather</NavLink>
          </div>
          <button className="menu-btn" onClick={() => toggleMenu()}>
            ☰
          </button>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/weather" element={<Weather/>} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;