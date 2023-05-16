import {IActor} from "../../types/UserInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUr {
    actor: IActor[]
    loader: boolean
    error: string
}

const initialState: IUr = {
    actor: [], loader: false, error: ''
}

export const actorSlice = createSlice({
    name: 'user', initialState, reducers: {
        fetchingActor(state) {
            state.loader = true
        }, fetchingActorSuccess(state, action: PayloadAction<IActor[]>) {
            state.actor = action.payload
            state.loader = false
            state.error = ''
        }, fetchingActorError(state, action: PayloadAction<string>) {
            state.loader = false
            state.actor = []
            state.error = action.payload
        }
    }
})

export default actorSlice.reducer
export const {fetchingActor, fetchingActorSuccess, fetchingActorError} = actorSlice.actions