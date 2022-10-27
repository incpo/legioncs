import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./paymentSlice";
export default configureStore({
    reducer: {
        payment: paymentSlice,
    }
}) 