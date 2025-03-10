import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Welcome to React Router</h1>
          <title>React Router</title>
        </header>
        <nav style={{ textAlign: "center", padding: "10px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
