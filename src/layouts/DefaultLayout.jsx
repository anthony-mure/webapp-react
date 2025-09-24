import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GlobalContext from "../contexts/globalContext";
import { useContext } from "react";
import Loarder from "../components/Loarder";


const DefaultLayout = () => {

  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      <Header/>
      <main className="container">
        <Outlet/> 
      </main>
      {isLoading && <Loarder />}
    </>
  );
};

export default DefaultLayout;
