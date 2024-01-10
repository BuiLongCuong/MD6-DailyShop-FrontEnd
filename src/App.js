import Login from "./components/Login/Customer/Login";
import SignIn from "./components/Login/Supplier/SignIn";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import HomeSimple from "./pages/HomeSimple";
import SignUp from "./components/Login/Supplier/SignUp";
import Register from "./components/Login/Customer/Register";
import {useSelector} from "react-redux";
import HomePageCustomer from "./pages/Homes/HomePageCustomer";
import HomePage from "./pages/Homes/HomePage";
import {Information} from "./components/Login/Customer/Information";
import AddProduct from "./pages/products/AddProduct";

function App() {
    const currentCustomer = useSelector(({customer}) => {
        return customer.currentCustomer
    })

    const currentSupplier = useSelector(({supplier}) => {
        return supplier.currentSupplier
    })

  return (
      <>
          <Routes>
              {/*<Route path={'dailyShop'} element={<HomeSimple/>}>*/}
              {/*    <Route path={"login"} element={<Login/>}/>*/}
              {/*    <Route path={"register"} element={<Register/>}/>*/}
              {/*    <Route path={"signIn"} element={<SignIn/>}/>*/}
              {/*    <Route path={"signUp"} element={<SignUp/>}/>*/}
              {/*</Route>*/}
              <Route path={"login"} element={<Login/>}/>
              <Route path={"register"} element={<Register/>}/>
              <Route path={"signIn"} element={<SignIn/>}/>
              <Route path={"signUp"} element={<SignUp/>}/>
              <Route path={"information"} element={<Information/>}/>
              <Route path={"add"} element={<AddProduct/>}></Route>
              {/*{*/}
              {/*    currentCustomer ? (*/}
              {/*        <>*/}
              {/*            <Route path={'dailyShop/customer'} element={<HomePageCustomer/>}/>*/}
              {/*        </>*/}
              {/*    ) : (*/}
              {/*        <>*/}
              {/*            <Route path={"*"} element={<Navigate to={"dailyShop"}/>}/>*/}
              {/*        </>*/}
              {/*    )*/}
              {/*}*/}

              {/*{*/}
              {/*    currentCustomer ? (*/}
              {/*        <>*/}
              {/*            <Route path={'dailyShop/supplier'} element={<HomePage/>}/>*/}
              {/*        </>*/}
              {/*    ) : (*/}
              {/*        <>*/}
              {/*            <Route path={"*"} element={<Navigate to={"dailyShop"}/>}/>*/}
              {/*        </>*/}
              {/*    )*/}
              {/*}*/}
          </Routes>
      </>
  );
}

export default App;
