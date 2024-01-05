import {configureStore} from "@reduxjs/toolkit";
import supplierReducer from "../redux/reducer/supplierReducer";

export const store = configureStore({
    reducer:{
        supplier: supplierReducer
    }
})