
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/HomePage/HomePage";
import ListProduct from "./Pages/products/ListProduct";
import AddProduct from "./Pages/products/AddProduct";
import UpdateProduct from "./Pages/products/UpdateProduct";


function App() {
  return (
        <Routes>
            <Route path={"home"} element={<Home/>}/>
            <Route path={"products"} element={<HomePage/>}>
                <Route path={"homePage"} element={<ListProduct/>}/>
                <Route path={"add"} element={<AddProduct/>}/>
                <Route path={":id"} element={<UpdateProduct/>}/>

            </Route>
        </Routes>

  );
}

export default App;
