import {createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const signIn = createAsyncThunk(
    'supplier/signIn',
    async (supplier) => {
        try {
            const res = await getAxios().post("/login", supplier)
            return res.data
        }catch (e){
            console.log(e)
        }
    }
)

export const editSupplier = createAsyncThunk(
    'supplier/editSupplier',
    async (supplierEdit) => {
        return await getAxios().put("/suppliers/edit/" + supplierEdit.account.id, supplierEdit)
    }
)

export const findByAccountId = createAsyncThunk(
    'supplier/findByAccountId',
    async (id) => {
        return await getAxios().get("/suppliers/findByAccountId/" + id);
    }
)