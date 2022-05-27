import { configureStore } from '@reduxjs/toolkit'
import nguoiDungReducer from './Reducers/nguoiDungReducer'
import phimReducers from './Reducers/phimReducers'




export const store = configureStore({
    reducer: {
        //Khai báo state
        phimReducers: phimReducers,
        nguoiDungReducer:nguoiDungReducer
    }
})