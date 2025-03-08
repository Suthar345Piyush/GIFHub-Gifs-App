import {useEffect , useState} from 'react';
import Gif from "../components/gif";
import { GifState }  from "../context/gif-context";

const Share = () => {
    const {gf , favorites} = GifState
   const [shareGIFs , setShareGIFs] = useState([]);

   const fetchShareGIFs = async () => {
     const {data : gifs} = await gf.gifs(favorites);
     setShareGIFs(gifs);
   };


   useEffect(() => {
     fetchShareGIFs();
   } , []);

   return (
    <div className="mt-2">
      <span className="faded-text">Shared GIFs</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {shareGIFs.map((gif) => (
           <Gif gif={gif} key={gif.id}/>
        ))}
      </div>
    </div>
   );
};


export default Share;

