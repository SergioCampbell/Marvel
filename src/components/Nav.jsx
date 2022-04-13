import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav justify-content-center">
      <Link to="/">
        <span className="nav-item">
          <a className="nav-link">Home</a>
        </span>
      </Link>
      <Link to="/characters">
        <span className="nav-item">
          <a className="nav-link">Characters</a>
        </span>
      </Link>
      <Link to="/comics">
        <span className="nav-item">
          <a className="nav-link">Comics</a>
        </span>
      </Link>
    </nav>
  );
}
