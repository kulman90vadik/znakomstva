// import { useContext } from "react";
import Card from "../components/Card/Card";
// import { CityContext } from "../context";
import { usersType } from "../type/usersType";
import { useFavorites } from "../zustand/useFavorites";
import { useCityFilter } from "../zustand/useCityFilter";

const Favorites = () => {
  // const { nameCity } = useContext(CityContext);
  const nameCity = useCityFilter((state) => state.nameCity);
  const favorites = useFavorites(state => state.favorites);

  return (
    <section>
      <div className="container w-full my-0 mx-auto">
        <ul className="grid grid-cols-5 gap-x-20 gap-y-20 pt-120">
          {favorites
          .filter((card: usersType) => {
            if('City' !== nameCity) {
              return card.city.toLowerCase().includes(nameCity.toLowerCase());
            }
            else {
              return favorites
            }
             
          })
          .map((card:usersType) => {
            return(
              <li 
              className="
              h-350 relative  
              after:absolute 
              after:content-* 
              after:inset-0 
              after:bg-gradient-to-r 
              after:from-black-100 to-black-200 
              after:rounded-[30px]

              after:transition-all 
              after:duration-3000 
              after:ease
              after:delay-150"
              key={card.id}>
                <Card item={card}/>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}
 
export default Favorites;