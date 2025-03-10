import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router</h1>
        <title>React Router</title>
      </header>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;