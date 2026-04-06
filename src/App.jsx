import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;