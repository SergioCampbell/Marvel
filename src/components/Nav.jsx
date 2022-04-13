import { Link } from "react-router-dom";
import '../App.css'

export default function Nav() {
  return (
    <nav className="nav nav-pills justify-content-center">
      <Link to="/">
        <span className="nav-item text-warning">
          <a href="#" className="nav-link link-light">Home</a>
        </span>
      </Link>
      <Link to="/characters">
        <span className="nav-item text-warning">
          <a href="#" className="nav-link link-light">Characters</a>
        </span>
      </Link>
      <Link to="/comics">
        <span className="nav-item text-warning">
          <a href="#" className="nav-link link-light">Comics</a>
        </span>
      </Link>
      <Link to="/series">
        <span className="nav-item text-warning">
          <a href="#" className="nav-link link-light">Series</a>
        </span>
      </Link>
    </nav>
  );
}
