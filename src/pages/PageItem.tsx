import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import TodoService from "../servises/service";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Heart } from "lucide-react";
import { useFavorites } from "../zustand/useFavorites";
import { usersType } from "../type/usersType";

const PageItem = () => {
  // const { name } = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const addFavorites = useFavorites((state) => state.addFavorites);
  const queryClient = useQueryClient();
  const location = useLocation();
  const { state } = location;
  const id = state.id
  const { data, isPending } = useQuery({
    queryKey: ["item", id],
    queryFn: () => TodoService.getId(id),
  });



  const {mutate} = useMutation({ // useMutation - для всего кроме GET!
    mutationKey: ['patch list'],
    mutationFn: (obj: usersType) => TodoService.patchId(obj),
    onSuccess() { // если всё хорощо прошло то очищаем
      queryClient.invalidateQueries({queryKey: ['item']}) // для автоматического обновления данных.
    }
  })



  const clickHandler = async (id: number, obj: usersType) => {
      mutate({...obj, favorites: !obj.favorites })
      const data = await TodoService.getId(id)
      addFavorites(data);
  };
  


  return (
    <section className="pageitem pt-40">
      <div className="container w-full my-0 mx-auto">
        {isPending ? (
          <div className="absolute font-semibold text-[50px] top-[50%] ">
            Loading...
          </div>
        ) : (
          data && (
            <div className="flex w-[80%] my-0 mx-auto">
              <div className="w-[40%] mr-[5%]">

                <Swiper
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mb-20"
                >
                  {data.gallery.map((slide: string, i:number) => {
                    return (
                      <SwiperSlide className="flex justify-center" key={i}>
                        <img className="w-[80%] h-[500px] object-cover rounded-[50px]" src={slide} alt={slide} />
                      </SwiperSlide>
                    );
                  })}
                  <button
                    onClick={() => clickHandler(data.id, data)}
                    className={`absolute z-20 bottom-20 left-[50%] translate-x-[-50%] flex justify-center items-center size-40 bg-buccaneer/30
                    hover:bg-buccaneer duration-300 transition-colors ease-in-out rounded-[50%]
                    ${data.favorites ? "activeBtn" : ""}`}>
                    <Heart size={20} color="#fff" />
                  </button>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-[80%] swiperThumbs"
                >
                  {data.gallery.map((slide: string, i:number) => {
                    return (
                      <SwiperSlide className="relative cursor-pointer" key={i}>
                        <img className="rounded-[20px]
                          size-[89px] object-cover"
                           src={slide} alt={slide} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <div className="w-[45%]">
                <div className="flex font-semibold text-[32px] mb-20 uppercase tracking-[3px]">
                  {data.name}
                  {data.status && (
                    <div className="size-10 rounded-[50%] bg-green ml-3"></div>
                  )}
                </div>
                <button className="button-current max-w-[300px] mb-20">
                  Greet
                  <svg
                    className="mb-3 ml-10 transition-transform duration-300 ease-linear"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_10728_9)">
                      <path
                        d="M2.70076 5.08166C3.22298 4.71666 4.0102 4.78666 4.47909 5.17388L3.94132 4.39222C3.50854 3.775 3.66354 3.10722 4.28132 2.67388C4.89909 2.24222 6.64965 3.40277 6.64965 3.40277C6.21298 2.77944 6.29465 1.98944 6.91798 1.55222C7.54132 1.11666 8.40132 1.26722 8.83798 1.89166L14.6269 10.0694L13.8891 17.2222L7.73187 14.9767L2.36132 7.01389C1.92076 6.38666 2.07298 5.52166 2.70076 5.08166Z"
                        fill="#EF9645"
                      />
                      <path
                        d="M1.49742 9.63111C1.49742 9.63111 0.868532 8.71444 1.78575 8.08611C2.70187 7.45777 3.3302 8.37388 3.3302 8.37388L6.24742 12.6283C6.34798 12.4606 6.45798 12.295 6.58075 12.1317L2.53187 6.22777C2.53187 6.22777 1.90353 5.31166 2.8202 4.68333C3.73631 4.05499 4.36464 4.97111 4.36464 4.97111L8.17298 10.525C8.31464 10.4094 8.45964 10.2933 8.60909 10.1794L4.19409 3.73999C4.19409 3.73999 3.56575 2.82388 4.48242 2.19555C5.39853 1.56722 6.02687 2.48333 6.02687 2.48333L10.4419 8.92166C10.6041 8.82222 10.7646 8.7361 10.9258 8.64499L6.79909 2.62722C6.79909 2.62722 6.17075 1.7111 7.08687 1.08277C8.00298 0.454438 8.63131 1.37055 8.63131 1.37055L12.9946 7.73388L13.658 8.70166C10.9091 10.5872 10.6474 14.1344 12.218 16.425C12.5319 16.8833 12.9902 16.5694 12.9902 16.5694C11.1052 13.82 11.6808 10.7305 14.4302 8.84555L13.6196 4.78888C13.6196 4.78888 13.3169 3.71999 14.3852 3.41666C15.4541 3.11388 15.7574 4.18277 15.7574 4.18277L16.6935 6.96277C17.0646 8.06499 17.4596 9.16333 17.9824 10.2022C19.4585 13.1356 18.5769 16.7811 15.7935 18.6906C12.7574 20.7722 8.60687 19.9983 6.52464 16.9628L1.49742 9.63111Z"
                        fill="#FFDC5D"
                      />
                      <path
                        d="M6.66678 17.8011C4.44456 17.8011 2.199 15.5555 2.199 13.3333C2.199 13.0261 1.974 12.7778 1.66678 12.7778C1.35956 12.7778 1.08789 13.0261 1.08789 13.3333C1.08789 16.6667 3.33345 18.9122 6.66678 18.9122C6.974 18.9122 7.22233 18.6405 7.22233 18.3333C7.22233 18.0261 6.974 17.8011 6.66678 17.8011Z"
                        fill="#5DADEC"
                      />
                      <path
                        d="M3.88889 18.8889C2.22222 18.8889 1.11111 17.7778 1.11111 16.1111C1.11111 15.8039 0.862778 15.5555 0.555556 15.5555C0.248333 15.5555 0 15.8039 0 16.1111C0 18.3333 1.66667 20 3.88889 20C4.19611 20 4.44444 19.7516 4.44444 19.4444C4.44444 19.1372 4.19611 18.8889 3.88889 18.8889ZM13.3333 1.11108C13.0267 1.11108 12.7778 1.35997 12.7778 1.66664C12.7778 1.97331 13.0267 2.2222 13.3333 2.2222C15.5556 2.2222 17.7778 4.21608 17.7778 6.66664C17.7778 6.97331 18.0267 7.2222 18.3333 7.2222C18.64 7.2222 18.8889 6.97331 18.8889 6.66664C18.8889 3.60331 16.6667 1.11108 13.3333 1.11108Z"
                        fill="#5DADEC"
                      />
                      <path
                        d="M16.1112 0.0233154C15.8046 0.0233154 15.5557 0.248871 15.5557 0.555538C15.5557 0.862204 15.8046 1.13443 16.1112 1.13443C17.7779 1.13443 18.8657 2.37054 18.8657 3.88887C18.8657 4.19554 19.1373 4.44443 19.4446 4.44443C19.7518 4.44443 19.9768 4.19554 19.9768 3.88887C19.9768 1.7572 18.3334 0.0233154 16.1112 0.0233154Z"
                        fill="#5DADEC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10728_9">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <ul className="mb-30">
                  <li className="flex mb-20 items-center">
                    <div>Height</div>
                    <div className=" ml-10 mr-10 border-dashed h-2 border-white border-t-[2px] grow"></div>
                    <div>{data.info.height}</div>
                  </li>
                  <li className="flex mb-20 items-center">
                    <div>Weight</div>
                    <div className=" ml-10 mr-10 border-dashed h-2 border-white border-t-[2px] grow"></div>
                    <div>{data.info.weight}</div>
                  </li>
                  <li className="flex mb-20 items-center">
                    <div>Color hair</div>
                    <div className=" ml-20 mr-10 border-dashed h-2 border-white border-t-[2px] grow"></div>
                    <div>{data.info.hair}</div>
                  </li>
                  <li className="flex mb-20 items-center">
                    <div>Color eyes</div>
                    <div className=" ml-10 mr-10 border-dashed h-2 border-white border-t-[2px] grow"></div>
                    <div>{data.info.eyes}</div>
                  </li>
                </ul>
                <div className="mb-10 tracking-[4px] text-[26px] text-center font-semibold">
                  About my
                </div>
                <div className="italic text-[20px] leading-[25px]">
                  {data.info.description}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default PageItem;
