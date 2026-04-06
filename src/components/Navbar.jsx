import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#333",
      padding: "10px",
      display: "flex",
      gap: "10px"
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/team" style={linkStyle}>Team</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 12px",
  background: "#555",
  borderRadius: "5px"
};

export default Navbar;