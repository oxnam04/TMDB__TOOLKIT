import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducer/UserSlice";
import detailSlice from "./Reducer/DetailPageSlice";
const rootReducer = combineReducers({
    movieSlice: movieSlice,
    detailSlice: detailSlice,
})

export const  setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
