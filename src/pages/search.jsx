import {useEffect, useState} from "react";
import { GifState } from "../context/gif-context";
import { useParams } from "react-router-dom";
import FilterGif from "../components/filter-gif";
import Gif from "../components/gif";


const SearchPage = () => {
   const [searchResults, setSearchResults] = useState([]);
   const {gf, filter} = GifState();
   const {query} = useParams();

   const fetchSearchResults = async () => {
    const {data} = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 25,
    });

    setSearchResults(data);
   };

   useEffect(() => {
    fetchSearchResults();
   }, [filter]);

   return (
    <div className="my-4">
      <h2 className="text-4xl pb-3 font-bold">{query}</h2>
      <FilterGif alignLeft={true} />
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>No Gif found for {query}. Try stickers instead?</span>
      )}
    </div>
   );
};

export default SearchPage;
