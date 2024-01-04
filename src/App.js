import './App.css';
import Login from "./components/Login/Customer/Login";
import SignIn from "./components/Login/Supplier/SignIn";
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeSimple from "./pages/HomeSimple";

function App() {
  return (
      <>
          <Routes>
              <Route path={'dailyShop'} element={<HomeSimple/>}/>
              <Route path={"loginCustomer"} element={<Login/>}/>
              <Route path={"loginSupplier"} element={<SignIn/>}/>
          </Routes>
      </>
  );
}

export default App;
