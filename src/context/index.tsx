
// import { ReactNode, createContext, useState} from 'react'
// import { SetStateAction, Dispatch } from 'react';


// interface IMenuContext {
//   nameCity: string,
//   setnNameCity: Dispatch<SetStateAction<string>>
// }

// export const CityContext = createContext<IMenuContext>({
//   nameCity: '',
//   setnNameCity: () => {},
// })


// export const CityProvider = ({children}: {children: ReactNode }) => {
//   const[nameCity, setnNameCity] = useState('')

//   return (
//     <CityContext.Provider value={{nameCity, setnNameCity}}>
//         {children}
//     </CityContext.Provider>
//   )
// }

