import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  onAddFavorite: (favoriteMeetup) => {},
  onRemoveFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  function onAddFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMeetup);
    });
  }

  function onRemoveFavoriteHandler(meetupId) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  const isFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    onAddFavorite: onAddFavoriteHandler,
    onRemoveFavorite: onRemoveFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
