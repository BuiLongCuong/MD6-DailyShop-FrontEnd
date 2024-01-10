import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../reducer/supplierReducer";
import customerReducer from "../reducer/customerReducer";
import categoryReducer from "../reducer/categoryReducer";
import productReducer from "../reducer/productReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer,
        customer : customerReducer,
        categories: categoryReducer,
        products: productReducer
    }
})