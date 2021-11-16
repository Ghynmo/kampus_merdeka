import { createSlice } from "@reduxjs/toolkit";

const newState = {   
    fullname: '',
    email: '',
    phone: '',
    nationality: '',
    message: ''
}

export const formSlice = createSlice({
    name: "formdata",
    initialState: {
        formdata : newState
    },
    reducers: {
        setUpdate: (state, action) => {
            const newData = action.payload
            console.log('in the payload', newData)
            if (newData !== null) {
                state.formdata = newData
            }
            console.log('in the state',state.formdata)
        }
    }
})

export const {setUpdate} = formSlice.actions;
export default formSlice.reducer;