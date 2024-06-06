import {createContext, useState} from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((prev) => prev.filter(mealID => mealID !== id));
  }

  const contextValue = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return (
      <FavoritesContext.Provider value={contextValue}>
          {children}
      </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;