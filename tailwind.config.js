


/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '55': '55px',
      '60': '60px',
      '65': '65px',
      '70': '70px',
      '75': '75px',
      '80': '80px',
      '85': '85px',
      '90': '90px',
      '95': '95px',
      '100': '100px',
      '105': '105px',
      '110': '110px',
      '115': '115px',
      '120': '120px',
      '125': '125px',
      '130': '130px',
      '135': '135px',
      '140': '140px',
      '145': '145px',
      '150': '150px',
      '155': '155px',
      '160': '160px',
    
      '350': '350px',
    },
    colors: {
      'white': '#ffffff',
      'transparent': 'transparent',
      'black': '#000',
      'black-100': 'rgba(0, 0, 0, 0.5)',
      'black-200': 'rgba(0, 0, 0, 0.1)',
      'black-300': 'rgba(0, 0, 0, 0.3)',

      'buccaneer': '#230E2B',
      'revolver': '#2D1436',
      'trendy': '#925FA4',
      'trendypink': '#8B5D9A',
      'mustard': '#FFDC5D',
      'bossanova': '#42204E',
      'radicalred': '#F43048',
      'tamarillo': '#A01414',
      'blazeorange': '#FE6703',

      'razzmatazz': '#EE0979',
      'blazeorange100': '#FF6A00',
      'green': '#33E159'

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '719px',
      // => @media (min-width: 768px) { ... }
      'emd': '991px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [
    plugin(function({ addUtilities, addComponents }) {
      addComponents({
        ".button-current": {
          display: 'flex',
          height: '60px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          color: '#fff',
          background: 'linear-gradient(90deg, #EE0979 0%, #FF6A00 100%)',
          borderRadius: '30px',
          transition: 'background 0.5s ease, boxShadow 0.3s ease',
          '@media (max-width: 540px)': {
            height: '45px'
          }
        },
        ".button-current:hover": {
          background: 'linear-gradient(90deg, #FFC700 0%, #FF005C 100%)',
        },
        ".button-current:hover svg": {
          transform: 'rotate(90deg)'
        },
        ".button-current:active": {
          boxShadow: '0px 20px 30px 0px #B3221F33',
          background: '#F43048'
        }
      }),


      addUtilities({
        ".slider-cards > .swiper-wrapper": {
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          '@media (max-width: 1279px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
          '@media (max-width: 1023px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          '@media (max-width: 991px)': {
            display: 'flex',
            gap: '0'
          }
        },

        ".slider-cards > .swiper-wrapper .swiper-slide": {
          '@media (min-width: 991px)': {
            width: 'auto !important'
          }
        },

        ".swiperThumbs .swiper-slide": {
          color: 'red',
          '&::after': {
            position: 'absolute',
            content: '" "',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            inset: '0',
            zIndex: '20px',
            borderRadius: '20px'
          }
        },

        ".swiperThumbs .swiper-slide-thumb-active": {
          '&::after': {
            backgroundColor: 'transparent'
          }
        },

        ".activeBtn": {
          backgroundColor: '#F43048',
        },
        ".activeBtn:hover": {
            backgroundColor: '#F43048!important',
        }
      })


    }),
  ],
}


// /* 
// // #EC008C #FC6767
// // #FFC700 #FF005C

// //#EE0979 #FF6A00
// //#0575E6 #021B79 */

// #230e2b #371a42