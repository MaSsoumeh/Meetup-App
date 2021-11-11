import { useContext } from 'react';
import { Link } from 'react-router-dom';
import selector from './MainNavigation.module.css';
import FavoriteContext from '../../store/FavoriteContext';
function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext);
  return (
    <header className={selector.header}>
      <Link to='/'>
        <h1 className={selector.title}> MeetLine</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={selector.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
