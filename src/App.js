import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageNotFound from "./Componets/PageNotFound/PageNotFound";
import Home from "./Componets/Home/Home";
import Tranding from "./Componets/Filter/Treanding";
import Bestofchennai from "./Componets/Filter/Bestofchennai";
import LatenightDelivery from "./Componets/Filter/LatenightDelivery";
import CusineDetaile from "./Componets/Detailes/CusineDetaile";
import SignUp from "./Componets/Home/SignUp";
import Navbar from "./Componets/Home/Navbar";
import Cart from "./Componets/Cart/Cart";
import Register from "./Componets/RgisterForm/Register";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Tranding" caseSensitive={false} element={<Tranding />} />
        <Route
          path="/Tranding/:id"
          caseSensitive={false}
          element={<CusineDetaile />}
        />
        <Route
          path="/Best_of_chennai"
          caseSensitive={false}
          element={<Bestofchennai />}
        />
        <Route path="/Sign_Up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/late_night_dinner"
          index
          caseSensitive={false}
          element={<LatenightDelivery />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
