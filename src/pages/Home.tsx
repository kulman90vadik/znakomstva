
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { usersType } from "../type/usersType";
import { useRef } from "react";
import "swiper/css";
import { useResize } from "../hooks/useResize";
// import { CityContext } from "../context";
import MyLoader from "../Loader/Loader";
import Card from "../components/Card/Card";
import TodoService from "../servises/service";
import { useQuery } from "@tanstack/react-query";
import { useCityFilter } from "../zustand/useCityFilter";
import { useSearch } from "../zustand/useSearch";

const Home = () => {
  const { width } = useResize();
  let swiperRef = useRef<SwiperRef>(null);
  // const { nameCity } = useContext(CityContext);
  const nameCity = useCityFilter((state) => state.nameCity);
  const search = useSearch((state) => state.search);

  const {data: cards = [], isLoading} = useQuery({
     queryKey: ["list", nameCity], 
     queryFn: () => TodoService.fetchCards(nameCity)
  })
 
  return (
    <section className="home pb-50 pt-120">
      <div className="sm:container-full px-20 xl:container w-full my-0 mx-auto ">
        <Swiper
          breakpoints={{
            991: {
              slidesPerView: 5,
              // spaceBetween: 20,
            },
            650: {
              slidesPerView: 2.5,
            },
            450: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
          ref={swiperRef}
          className="slider-cards "
          spaceBetween={10}
          slidesPerView={1.5}
          grabCursor={true}
          loop={true}
          onSlideChange={() => console.log("slide change")}

          onSwiper={(swiper) => {
            if (width > 991) { swiper.destroy(false, false) }
          }}>

          {
            isLoading ?
            [...Array(13)].map((_, i) => {
              return (
                <SwiperSlide
                  className="
                  h-350 relative  
                  after:absolute 
                  after:content-* 
                  after:inset-0 
                  after:bg-gradient-to-r 
                  after:from-black-100 to-black-200 
                  after:rounded-[30px]"
                  key={i}
                >
                  <MyLoader />
                </SwiperSlide>
              );
            })
            :
            // isError ?
            //   <div className="absolute top-[30%] text-center text-[45px] left-[50%] translate-x-[-50%]">
            //         {isError}&#128528;
            //       </div>
            // :
            cards
            .filter((item: usersType) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item: usersType) => {
              return (
                <SwiperSlide
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
                  key={item.id}
                >
                  <Card item={item} />
                </SwiperSlide>
              );
            })

          }
        </Swiper>

      </div>
    </section>
  );
};

export default Home;
