import { CircleX } from "lucide-react";
import { useState } from "react";
import { useSearch } from "../../zustand/useSearch";


interface Props {
  openSearch: boolean,
  setOpenSearch: (i: boolean) => void
}

const SearchInput = ({openSearch, setOpenSearch} : Props) => {
  const setSearch = useSearch((state) => state.setSearch);
  const[value, setValue] = useState('');
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  }
  
  const handlerClose = () => {
    setSearch('');
    setValue('');
    setOpenSearch(false);
  }
  const handlerIcon = () => {
    setSearch('');
    setValue('');
  }

  return (
    <div className={`hover:bg-opacity-40 transition-transform ease-linear duration-200
       flex justify-center items-center 
      absolute -bottom-80 left-0 bg-opacity-20
     
    bg-mustard h-80 w-full ${openSearch ? 'translate-y-[0%] z-150' : 'translate-y-[-100%] -z-50'}`}>
      <div className="relative w-[50%]">
          <input className="
          focus:outline-none focus:bg-white bg-opacity-10 focus:text-black
          ease-linear duration-200 transition-all
          pl-10 pr-20 h-40 w-full rounded-[10px]
          text-black-100
          " type="text" placeholder="Search Name..." name="search" 
            onChange={(e) => handlerInput(e)}
            value={value}
          />
          {value ? <button className="absolute right-10 top-[50%] translate-y-[-50%] " onClick={handlerIcon}> <CircleX color="red"/> </button>: ''}
          <button className="absolute -right-30 -top-10" onClick={handlerClose}>
            <CircleX color="red" className="hover:stroke-black transition-colors ease-linear duration-200"/>
          </button>
      </div>
    </div>
  );
}
 
export default SearchInput;