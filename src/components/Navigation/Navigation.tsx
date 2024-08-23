import { NavLink } from "react-router-dom";



  const navigation = [
    {'lebel': 'Questionnaires', 'link': '/'},
    {'lebel': 'Messages', 'link': '/messages'},
    {'lebel': 'Favorites', 'link': '/favorites'},
  ]

  interface Props {
    openBurger: boolean,
    setOpenBurger: (i: boolean) => void
  }
  

const Navigation = ({openBurger, setOpenBurger}: Props) => {

const norm = 'hover:text-blazeorange100 transition ease-in-out duration-300';
const activelink = ' text-blazeorange emd:pb-30 pb-10 relative before:absolute before:content-*  before:h-2 before:w-full before:left-0 before:bottom-0 before:bg-gradient-to-r from-razzmatazz to-blazeorange100 ';

  return (
    <nav className={
      ` emd:translate-x-[0%] ${openBurger ? 'translate-x-[0%]' : 'translate-x-[-100%]'}
      emd:static emd:h-auto emd:bg-transparent bg-opacity-80 transition-transform ease-linear duration-500
      fixed mr-auto h-lvh inset-0 bg-black z-50 flex justify-center items-center
      `
    }
    >
      <ul className="
      flex emd:flex-row
      flex-col w-full
      ">
        {navigation.map(link => {
          return(
            <li className="emd:[&:not(:last-child)]:mr-40 [&:not(:last-child)]:mb-40 [&:not(:last-child)]:mb-0 text-center" key={link.lebel}>
              <NavLink
              className={ ({ isActive }) => isActive ? activelink : norm}
              to={link.link}
              onClick={() => setOpenBurger(false)}
              >
                {link.lebel}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
 
export default Navigation;