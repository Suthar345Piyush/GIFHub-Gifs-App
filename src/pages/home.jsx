import { GifState } from "../context/gif-context";
import { useEffect } from "react";
import Gif from "../components/gif"
import Filtergif from "../components/filter-gif";

const Home = () => {
   const {gf , gifs ,setGifs, filter } = GifState();
   const  fetchTrendingGifs = async () => {
     const {data : gifs} = await gf.trending({
       limit : 30,
       type : filter,
       rating : "g",
     });
     setGifs(gifs);
   };

   useEffect(() => {
    fetchTrendingGifs();
   } , [filter]);

   return (
    <div className = "">
      <img 
        src = "/banner.gif"
        alt = "earth banner gif"
        className = "mt-2 rounded w-full"
      />
           <Filtergif showTrending />
           
     <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
     {gifs.map((gif) => {
       return (
       <Gif gif={gif} key ={gif.title}/>
       )
     })}
   </div>
  </div>
   );
}

export default Home;
