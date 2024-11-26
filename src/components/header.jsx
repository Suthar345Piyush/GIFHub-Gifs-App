import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiThreePointedShuriken } from "react-icons/gi";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import { GifState } from '../context/gif-context';
import GifSearch from './gif-search';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);


  const {gf  , favorites} = GifState();

  const fetchGifCategories = async () => {
    const {data} = await gf.categories();
    setCategories(data);
  }

  useEffect(() => {
        fetchGifCategories();
  } , [])

  return (
    <nav>
      <div className="relative flex gap-3 justify-between items-center mb-2">
        <Link to="/">
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer hover:text-green-500">GifHub.</h1>
        </Link>
        <div className= "font-bold text-md flex gap-3 items-center">
          {/* render categories */}
          {categories?.slice(0 , 5)?.map((category) => {
        return (  // this slice(0,5) takes starting 5 elements
          <Link 
          key = {categories.name}
          to={`/${category.name_encoded}`}
          className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          {category.name}
        </Link>
        );
          })}
        <button onClick={() => setShowCategories(!showCategories)}>
          <GiThreePointedShuriken 
            size={33}
            className={`py-0.5 transition ease-in-out hover-gradient ${
              showCategories ? "gradient" : ""
            } border-b-4 cursor-pointer hidden lg:block`}
        />
        </button>

    {favorites.length > 0 && (
      <div>
        <Link to="/favorites">Favorite GIF</Link>
      </div>
    )}

        <div className="h-9 bg-teal-950 pt-1.5 px-6 cursor-pointer rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Link to="/favorites">Favorite GIFs</Link>
        </div>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiMiniChevronDoubleLeft
            className="text-sky-500 block lg:hidden"
            size={35}
          />
        </button>
      </div> 
      {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
          <span className= "text-3xl font-extrabold">Categories</span>
          <hr  className="bg-gray-200 opacity-50 my-5"/>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {categories?.map((category) => {
              return (
                <Link 
                 onClick={() => setShowCategories(false)}
                 className="transition ease-in-out font-bold"
                 key={category.name}
                 to={`/${category.name_encoded}`}>
                {category.name}
                </Link>
              );
            })};
          </div>
        </div>
      )}
      </div>
      <GifSearch />
    </nav>
  );
};

export default Header;