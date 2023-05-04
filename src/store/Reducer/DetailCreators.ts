import {AppDispatch} from "../store";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";
import {fetchingDetailError, fetchingDetail, fetchingDetailSuccess} from "./DetailPageSlice";

export const fetchingDetailMovie = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingDetail())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${APIKEY}&language=en-US`)
        dispatch(fetchingDetailSuccess(responsive.data.results))
    } catch (e: any) {
        dispatch(fetchingDetailError(e.massage))
    }
}