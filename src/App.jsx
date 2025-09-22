import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailMovie from "./pages/DetailMovie";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
 
   return(
    <>
     <BrowserRouter>
       <Routes>
        <Route element={<DefaultLayout />}>
           <Route path="/" element={<HomePage />}></Route>
           <Route path="/movies/:id" element={<DetailMovie />}></Route>
        </Route>
       </Routes>
     </BrowserRouter>
    </>
   );
};

export default App
