import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    fullname: '',
    email: '',
    phone: '',
    nationality: '',
    message: ''
}

export const formSlice = createSlice({
    name: "formdata",
    initialState: initialValue,
    reducers: {
        setUpdate: (state, action) => {
            state = [...state, action.payload]
        }
    }
})

export const {setUpdate} = formSlice.actions;
export default formSlice.reducer;