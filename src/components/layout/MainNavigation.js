import { Link } from "react-router-dom";
import selector from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={selector.header}>
      <h1 className={selector.title}>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
