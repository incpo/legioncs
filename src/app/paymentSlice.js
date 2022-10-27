import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        statusParams: {status: "", time: true,},
        statusCondition: true,
        statusData: '',
        modalCost: ''
    },
    reducers: {
        setParams: (state,action) =>{
            state.statusParams.status = action.payload
        },
        // true -> unlimited, false - 30days
        setTimeStatus: state => {
            state.statusParams.time = !state.statusParams.time
        },
        changeCondition: (state) => {
            state.statusCondition = !state.statusCondition;
        },
        loadBack: (state,action) => {
            state.statusCost = action.payload
        },
        loadStatusData: (state,action) => {
            state.statusData = action.payload;
        }
    },
})


export default paymentSlice.reducer;
export const statusParams = state => state.payment.statusParams;
export const statusData = state => state.payment.statusData;
export const { setParams, changeCondition,setTimeStatus, loadStatusData} = paymentSlice.actions;