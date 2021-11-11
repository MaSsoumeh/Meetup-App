import { useContext } from 'react';
import Card from '../layout/Card';
import selector from './MeetupItem.module.css';
import FavoritesContext from '../../store/FavoriteContext';

function MeetupItem(props) {
  const { title, image, address, description } = props;

  const FavoritesCTX = useContext(FavoritesContext);
  const itemIsFavorite = FavoritesCTX.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      FavoritesCTX.onRemoveFavorite(props.id);
    } else {
      FavoritesCTX.onAddFavorite({
        id: props.id,
        title, // equals to title: title
        image,
        address,
        description,
      });
    }
  }
  return (
    <li className={selector.item}>
      <Card>
        <figure className={selector.image}>
          <img src={image} alt={`a must-see place in ${address}`}></img>
        </figure>
        <header>
          <h3>{title}</h3>
        </header>
        <article className={selector.content}>
          <em>{address}</em>
          <p> {description}</p>
        </article>
        <div className={selector.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? 'Remove Favorites' : 'Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
