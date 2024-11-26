import { createContext, useState, useContext , useEffect} from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const GifContext =  createContext();

const GifProvider = ({children}) => {
  const [gifs , setGifs] = useState([]);
  const [filter , setFilter] = useState("gifs");
  const [favorites , setFavorites] = useState([]);

const gf = new GiphyFetch(import.meta.env.VITE_GIFHUB_KEY);


useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
  setFavorites(favorites);
} , []);



const addToFavorites = (id) => {
  console.log(id);
  if(favorites.includes(id)){
    // if the items is already in the array then remove it

    const updatedFavorites = favorites.filter((itemId) => itemId !== id);
    localStorage.setItem("favoriteGIFs" , JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }
  else {
     //if the item is not present then add it to the array

     const updatedFavorites = [...favorites];
     updatedFavorites.push(id);
     localStorage.setItem("favoriteGIFs" , JSON.stringify(updatedFavorites));
     setFavorites(updatedFavorites);
  }
};

  return ( <GifContext.Provider 
    value={{gf,gifs,setGifs,filter,setFilter,favorites , addToFavorites}}>
  {children}
  </GifContext.Provider>
  );
};


export const GifState = () => {
  return useContext(GifContext);
}

export default GifProvider;
