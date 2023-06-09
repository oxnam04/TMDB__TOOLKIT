import React, {useEffect} from 'react';
import {useAppSelector} from "../hook/useAppSelector";
import {Link} from "react-router-dom";
import {fetchingPopular} from "../store/Reducer/ActionCreators";
import {useAppDispatch} from "../hook/useAppDispatch";


const User = () => {
    const {movie, error, loader} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingPopular)
    }, [])
    if (loader) {
        return <div>
            <h2 style={{display: "flex", justifyContent: "center"}}>LOADING...{loader}</h2>
            <h2 style={{display: "flex", justifyContent: "center"}}>ПОЖАЛУЙСТА ПОДОЖДИТЕ...{loader}</h2>
        </div>
    }


    return (
        <div className="container">
            <div className="popular">


                {
                    movie.map(el => (
                        <div className="popular--tittle">
                            <Link to={`/movie/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                                <p style={{
                                    color: "red",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}>{el.original_title}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default User;