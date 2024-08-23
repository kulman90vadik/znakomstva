import create from 'zustand';
import { usersType } from '../type/usersType';
import {persist, devtools} from 'zustand/middleware';

interface Props {
  favorites: usersType[];
  addFavorites: (arr: usersType) => void;
}

export const useFavorites = create<Props>()(
  devtools(
    persist(
      (set => ({ 
        favorites: [],
        addFavorites: (arr: usersType) => set((state) => {
          if (state.favorites.find((item) => item.id === arr.id)) {
            return {
              favorites: state.favorites.filter((elem) => elem.id !== arr.id)
            }   
          } else {
            return {favorites: [...state.favorites, {...arr, favorites: !arr.favorites}]}
          }
        }),
      })),
      { name: 'Props' }
    )
  )
);
