import {IDetail} from "../../types/UserInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


// Detail Page -> Partial<IDetail>


interface IUsersDetail {
    detail: Partial<IDetail>
    loader: boolean
    error: string
}

const initialState: IUsersDetail = {
    detail: {},
    loader: false,
    error: ''
}

export const detailSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchingDetail(state) {
            state.loader = true
        },
        fetchingDetailSuccess(state, action: PayloadAction<IDetail>) {
            state.detail = action.payload
            state.loader = false
            state.error = ''
        },
        fetchingDetailError(state, action: PayloadAction<string>) {
            state.loader = false
            state.detail = {}
            state.error = action.payload
        }
    }
})

export default detailSlice.reducer
export const {fetchingDetail,fetchingDetailSuccess,fetchingDetailError} = detailSlice.actions
