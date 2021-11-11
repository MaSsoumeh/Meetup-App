import selector from './Favorites.module.css';
import { useContext } from 'react';
import FavoriteContext from '../store/FavoriteContext';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const context = useContext(FavoriteContext);
  let pageContent;
  if (context.favorites.length === 0) {
    pageContent = <p>You have no Favorite yet. please add some.</p>;
  } else {
    pageContent = <MeetupList allMeetups={context.favorites} />;
  }
  return (
    <section className={selector.section}>
      <h2 className={selector.heading}>My Favorites</h2>
      {pageContent}
    </section>
  );
}
export default FavoritesPage;
