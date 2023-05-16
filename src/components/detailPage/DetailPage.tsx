import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hook/useAppDispatch";
import {useAppSelector} from "../../hook/useAppSelector";
import {fetchingDetailPage} from "../../store/Reducer/DetailCreators";
import ActorsDetail from "./actors/ActorsDetail";
import ActorBiography from "./actors/ActorBiogra[hy/ActorBiography";

const DetailPage = () => {
    const {movie_id} = useParams()
    const {detail, error, loader} = useAppSelector(state => state.detailSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingDetailPage(movie_id))
    }, [])
    console.log(detail)
    return (
        <div id="detail" style={{
            background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path})no-repeat center center  fixed`,
            padding: "100px 0"
        }}>
            <div className="container">
                <div className="detail--title">
                    <div>
                        {
                            <div className="detail--title">
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`}
                                     alt="img"/>

                                <div className="title--detail">
                                    <h1>{detail.title}</h1>
                                    <h1><span style={{color: "red"}}>Year:</span> {detail.release_date}</h1>
                                    <p style={{color: "red"}}>ОБЗОРЫ:<b style={{color: "white"}}>{detail.overview}</b></p>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>
            <ActorsDetail/>
        </div>);
};
export default DetailPage