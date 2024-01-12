import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../reducer/supplierReducer";
import customerReducer from "../reducer/customerReducer";
import categoryReducer from "../reducer/categoryReducer";
import addressReducer from "../reducer/addressReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer,
        customer : customerReducer,
        categories : categoryReducer,
        address: addressReducer,
    }
})