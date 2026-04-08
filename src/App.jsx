import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import Team from "./Team";
import Contact from "./Contact";

function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          
          {/* Logo - bisa klik kembali ke Home */}
          <NavLink to="/" className="text-decoration-none">
            <i className="fa-solid fa-book fa-xl text-primary"></i>
            <span className="ms-2 fw-bold text-dark">Bookstore</span>
          </NavLink>

          {/* Menu Navigasi */}
          <ul className="nav">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/book" 
                className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"}
              >
                Book
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/team" 
                className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Tombol Login/Signup */}
          <div>
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Sign-up</button>
          </div>

        </header>
      </div>

      {/* ROUTING - Area konten berganti sesuai halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <div className="container">
        <footer className="py-3 my-4 text-center text-body-secondary border-top pt-3">
          <p>© 2025 Bookstore. All rights reserved.</p>
        </footer>
      </div>

    </Router>
  );
}

export default App;