import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';

interface Props {
  nameCity: string,
  setNameCity: (str: string) => void;
}


export const useCityFilter = create<Props>()(
  devtools(
    persist(
      (set => ({ 
        nameCity: 'City',
        setNameCity: async (str) => {
          // console.log('city')
          set({nameCity: str})
        }
      })),
      { name: 'Props' }
    )
  )
);

