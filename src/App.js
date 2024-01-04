import './App.css';
import Login from "./components/Login/Customer/Login";
import SignIn from "./components/Login/Supplier/SignIn";
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeSimple from "./pages/HomeSimple";
import SignUp from "./components/Login/Supplier/SignUp";
import Register from "./components/Login/Customer/Register";

function App() {
  return (
      <>
          <Routes>
              <Route path={'dailyShop'} element={<HomeSimple/>}/>
              <Route path={"login"} element={<Login/>}/>
              <Route path={"register"} element={<Register/>}/>
              <Route path={"signIn"} element={<SignIn/>}/>
              <Route path={"signUp"} element={<SignUp/>}/>
          </Routes>
      </>
  );
}

export default App;
