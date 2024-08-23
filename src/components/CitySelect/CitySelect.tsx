
import { usersType } from "../../type/usersType";
import TodoService from "../../servises/service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
// import { CityContext } from "../../context";
import { useCityFilter } from "../../zustand/useCityFilter";
// import { useSearch } from "../../zustand/useSearch";

const CitySelect = () => {
  // const{setnNameCity} = useContext(CityContext);
  const refDiv = useRef<HTMLDivElement>(null);
  const setNameCity = useCityFilter((state) => state.setNameCity);

  const nameCity = useCityFilter((state) => state.nameCity);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(nameCity);
 
  const { data:cards } = useQuery({
    queryKey: ["list"],
    queryFn: () => TodoService.getAll(),
  });

  const click = (item: string) => {
    setOpen(!open)
    setCount(item)
    setNameCity(item)
  };
  

  let citys: string[] = ['City'];
  cards?.forEach((item: usersType) => citys.push(item.city));
  const result = citys.reduce((acc: string[], item: string) => {
    if (acc.includes(item)) return acc;
    return [...acc, item];
  }, []);

  useEffect(() => {
    const clickSortHandler = (event: MouseEvent) => {
      const e = event as MouseEvent;
      if (refDiv.current && !e.composedPath().includes(refDiv.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", clickSortHandler);
    return () => {
      document.body.removeEventListener("click", clickSortHandler);
    };
  }, []);

  return (
    <div className="relative w-[130px]" ref={refDiv}>
      <button
        className="relative flex items-center w-[130px] p-10 "
        type="button"
        onClick={() => setOpen(!open)}
      >
        {count}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className={`size-15 transition-all duration-300 ml-10 ${open ? "rotate-180" : "rotate-0"} `}
         >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <ul
        className="absolute left-0 top-40 w-full z-10 bg-revolver/80 overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0px" }}
      >
        {result.map((item) => {
          return (
            <li
              className="pt-2 pb-2 pl-10 cursor-pointer
              hover:bg-white 
              hover:text-black 
              transition-colors ease-in-out duration-300
              "
              key={item}
              onClick={() => click(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CitySelect;
