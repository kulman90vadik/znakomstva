import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import PageItem from "./pages/PageItem";
// import { CityProvider } from "./context";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <>
    {/* <CityProvider> */}

    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="person/:gender/:name" element={<PageItem />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    {/* </CityProvider> */}
    </>
  );
}
 
export default App;