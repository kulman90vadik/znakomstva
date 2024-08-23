import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import CitySelect from "../CitySelect/CitySelect";
import { Search } from 'lucide-react';
import SearchInput from "../SearchInput/SearchInput";
import { useState } from "react";
import Login from "../Login/Login";

const Header = () => {
  let location = useLocation();
  const[openSearch, setOpenSearch] = useState(false)
  const[openBurger, setOpenBurger] = useState(false)

  return (
    <header className="bg-revolver relative z-49">
      <div className="emd:container emd:py-30 py-10 px-15 w-full my-0 mx-auto flex items-center justify-between">
        <Link to="/" className={`flex h-60 w-160 mr-60 ${(location.pathname !== '/') ? 'mr-auto emd:mr-60' : ''}`}>
          <img className="w-full h-auto" src="/images/logo.svg" alt="Logo" />
        </Link>

        <Navigation openBurger={openBurger} setOpenBurger={setOpenBurger}/>

        {(location.pathname === '/') && 
          <button className="ml-auto emd:ml-0 bg-transparent p-5 cursor-pointer mr-20"
          onClick={() => setOpenSearch(!openSearch)}
          ><Search /></button>
        }


        {!(location.pathname.toLowerCase().includes('person')) && 
            <CitySelect />
        }

        {(location.pathname === '/') && 
          <SearchInput setOpenSearch={setOpenSearch} openSearch={openSearch}/>
        }

        <Login />

        <button className="
         emd:hidden flex flex-col items-center
         justify-center size-40 p-3 hover:bg-opacity-80 emd:static
         transition-colors ease-linear duration-200 z-[100] relative
         bg-tamarillo rounded-[50%]
         z
         "
         type="button" onClick={() => setOpenBurger(!openBurger)}>
          <span className="block w-[80%] bg-buccaneer h-3 rounded-[2px]"></span>
          <span className="block w-[80%] bg-buccaneer h-3 rounded-[2px] my-3"></span>
          <span className="block w-[80%] bg-buccaneer h-3 rounded-[2px]"></span>
        </button>
        
      </div>
    </header>
  );
}
 
export default Header;