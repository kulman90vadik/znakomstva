import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { usersType } from "../../type/usersType";
import { useRef } from 'react';
import { useResize } from '../../hooks/useResize';

import 'swiper/css';


type Props = {
  data: usersType[]
  // width: number
}

const Slider = ({data}: Props) => {
  let swiperRef = useRef<SwiperRef>(null)
  const {width} = useResize();
  console.log(width);

  return (
    <Swiper
      breakpoints={{
        829: {
          slidesPerView: 3.5,
        },
        650: {
          slidesPerView: 2.5,
        },
        450: {
          slidesPerView: 2.5,
          spaceBetween: 10
        }
      }}
      ref={swiperRef}
      className='slider-cards'
      spaceBetween={10}
      slidesPerView={1.5}
      grabCursor={true}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        if(width > 991) swiper.destroy(false, false)
          
      
      }}
    >

      {
            data.map((item: usersType) => {
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
                    after:delay-150

                    hover:after:from-transparent  
                    hover:after:to-transparent"
                  key={item.id}
                >
                  <img
                    className="rounded-[30px]  w-full object-cover h-full"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div className="absolute bottom-0 left-0  w-full z-10">
                    <div className=" pl-20 pr-20 flex items-center w-full mb-10">
                      <span className="block mr-10 font-semibold text-[21px]">
                        {item.name}
                      </span>
                      <span className="text-[24px] font-bold">{item.age}</span>
                    </div>
                    <div className=" pl-20 pr-20 flex items-center mb-20">
                      <span className="mr-10 text-[18px]">{item.city}</span>
                      <img
                        className="border-1 border-solid border-white rounded-[3px] object-cover flex h-20 w-40"
                        src={item.flag}
                        alt={item.city}
                      />
                    </div>
                    <button className="button-current">
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
                  </div>
                </SwiperSlide>
              );
            })}
  
      </Swiper>

  );
}
 
export default Slider;