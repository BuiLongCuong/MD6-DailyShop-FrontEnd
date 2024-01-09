import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../redux/reducer/supplierReducer";
import categoryReducer from "../redux/reducer/categoryReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer,
        categories : categoryReducer
    }
})