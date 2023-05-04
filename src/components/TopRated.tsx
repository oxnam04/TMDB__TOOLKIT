import React, {useEffect} from 'react';
import {useAppSelector} from "../hook/useAppSelector";
import {useAppDispatch} from "../hook/useAppDispatch";
import {fetchingPopular, fetchingTopRated} from "../store/Reducer/ActionCreators";
import {Link} from "react-router-dom";

const TopRated = () => {
    const {movie, error, loader} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingTopRated)
    }, [])
    return (
        <div className="container">
            <div className="popular">
                {
                    movie.map(el => (
                        <div  className="popular--tittle">
                            <Link to={`/movie/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                                <p style={{color:"red",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>{el.original_title}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};
export default TopRated;