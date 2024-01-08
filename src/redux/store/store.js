import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../reducer/supplierReducer";
import customerReducer from "../reducer/customerReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer,
        customer : customerReducer
    }
})