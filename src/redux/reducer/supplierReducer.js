import {createSlice} from "@reduxjs/toolkit";
import {editSupplier, findByAccountId, signIn} from "../service/supplierService";

const initialState = {
    currentSupplier:JSON.parse(localStorage.getItem("currentSupplier")),
    list: [],
    supplier: {
        supplierName : '',
        contactName : '',
        phone: '',
        address: '',
        province: '',
        district: '',
        ward: '',
        imageSupplier: '',
    },
}
const userSlice = createSlice({
    name: "supplier/signIn",
    initialState,
    extraReducers: builder => {
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            localStorage.setItem("currentSupplier", JSON.stringify(payload))
            state.currentSupplier = payload;
        })
        builder.addCase(editSupplier.fulfilled, (state, action) => {
            // state.list[state.list.indexOf(action.payload)] = action.payload;
            console.log(action.payload.data)
        })
        builder.addCase(findByAccountId.fulfilled, (state, {payload}) => {
            state.supplier = payload.data;
        })
    }
})
export default userSlice.reducer