import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../reducer/supplierReducer";
import customerReducer from "../reducer/customerReducer";
import categoryReducer from "../reducer/categoryReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer,
        customer : customerReducer,
        categories : categoryReducer
    }
})