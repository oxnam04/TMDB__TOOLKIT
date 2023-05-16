import React, {useEffect} from 'react';
import {useAppSelector} from "../../../../hook/useAppSelector";
import {useAppDispatch} from "../../../../hook/useAppDispatch";
import {fetchingDetail, fetchingDetailError, fetchingDetailSuccess} from "../../../../store/Reducer/DetailPageSlice";
import axios from "axios";
import {APIKEY} from "../../../../Apikey/APIKEY";
import {useParams} from "react-router-dom";

const ActorBiography = () => {
    const {actorId} = useParams()
    const {detail, loader, error} = useAppSelector(state => state.detailSlice)
    const dispatch = useAppDispatch()
    const fetchingBiography = async () => {
        try {
            dispatch(fetchingDetail())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDetailSuccess(responsive.data))
        } catch (e: any) {
            dispatch(fetchingDetailError(e.massage))
        }
    }
    useEffect(() => {
        dispatch(fetchingBiography)
    }, [])
    console.log(detail)
    return (
        <div>            {
            <div id="biography">
                <div style={{background:"black"}} className="container">
                    <div className="biography">
                        <div style={{
                            display: "flex", alignItems: "center", padding: "100px 0 0 0"
                        }}><img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.profile_path}`}
                                alt=""/>                                <p style={{
                            width: "800px", color: "wheat", fontSize: "15px"
                        }}><b style={{color: "red"}}>biography:</b>{detail.biography}</p></div>
                    </div>
                </div>
            </div>}

        </div>);
};
export default ActorBiography;