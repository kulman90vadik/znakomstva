import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';

interface Props {
  search: string,
  setSearch: (str: string) => void;
}


export const useSearch = create<Props>()(
  devtools(
    // persist(
      (set => ({ 
        search: '',
        setSearch: async (str) => {
          set({search: str})
        }
      })),
      { name: 'Props' }
    // )
  )
);

// useSearch