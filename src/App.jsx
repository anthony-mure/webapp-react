import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailMovie from "./pages/DetailMovie";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GlobalContext from "./contexts/globalContext";


function App() {

   const [isLoading, setIsLoading] = useState(false);
 
   return(
    <>
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
     <BrowserRouter>
       <Routes>
        <Route element={<DefaultLayout />}>
           <Route path="/" element={<HomePage />}></Route>
           <Route path="/movies/:id" element={<DetailMovie />}></Route>
           <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
       </Routes>
     </BrowserRouter>
    </GlobalContext.Provider>
    </>
   );
};

export default App
