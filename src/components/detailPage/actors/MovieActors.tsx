import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick"
import {useAppSelector} from "../../../hook/useAppSelector";
import {useAppDispatch} from "../../../hook/useAppDispatch";
import {AppDispatch} from "../../../store/store";
import {fetchingActor, fetchingActorError, fetchingActorSuccess} from "../../../store/Reducer/ActorReducer";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";

const MovieActors = () => {

    const {movieId} = useParams()
    const {actor, error, loader} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const fetchingActors = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActor())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${movieId}/movie_credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingActorSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorError(e.massage))
        }
    }


    console.log(fetchingActor)

    useEffect(() => {
        dispatch(fetchingActors)
    },[])


    if (loader) {
        return <div>
            <h2 style={{display: "flex", justifyContent: "center"}}>LOADING...{loader}</h2>
            <h2 style={{display: "flex", justifyContent: "center"}}>ПОЖАЛУЙСТА ПОДОЖДИТЕ...{loader}</h2>
        </div>
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
    };
    return (
        <div className="actors-info">
            <div className="container">
                {
                    <Slider {...settings}>
                        {
                            actor.map(el => (
                                <div>
                                    <Link to={`/movie/${el.id}`}>
                                        <img
                                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                                            alt=""/>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
        </div>
    );
};

export default MovieActors;

