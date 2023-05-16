import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hook/useAppSelector";
import {useAppDispatch} from "../../../hook/useAppDispatch";
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../../Apikey/APIKEY";
import {AppDispatch} from "../../../store/store";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {fetchingActor, fetchingActorSuccess, fetchingActorError} from "../../../store/Reducer/ActorReducer"


const ActorsDetail = () => {
    const {movie_id} = useParams()
    const {actor, error, loader} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const fetchingActors = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActor())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingActorSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(fetchingActors)
    }, [])

    console.log(actor)
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container--actors" style={{marginTop:150 , padding:" 0 0 70px"}}>
            <div id="actors" style={{display: "flex" ,flexDirection: "column",}}>
                <h1 style={{color: "white", padding: "30px 0"}}>В главных ролях:</h1>
                <Slider {...settings}>
                    {
                        actor.map(el => (
                            el.profile_path &&
                            <Link to={`/actorBiography/${el.id}`}>
                                <div><img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`}
                                          alt="" style={{
                                    padding: "2px 2px", width: "200px"
                                }}/>                                <p><b style={{
                                    color: "red"
                                }}>name:</b>{el.name}</p>


                                </div>
                            </Link>))
                    }
                </Slider>
            </div>
        </div>);

};
export default ActorsDetail;
