import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./getAxios";

export const signIn = createAsyncThunk(
    'supplier/signIn',
    async (supplier) => {
        try {
            console.log(supplier)
            const res = await getAxios().post("/signIn", supplier)
            return res.data
        }catch (e){
            console.log(e)
        }
    }
)