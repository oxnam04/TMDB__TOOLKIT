import {useAppSelector} from "../../hook/useAppSelector";
import {useAppDispatch} from "../../hook/useAppDispatch";
import React, {useEffect} from "react";
import {fetchingDetailMovie} from "../../store/Reducer/DetailCreators";



const DetailPage = () => {


    const {actors, error, loader} = useAppSelector(state => state.detailSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingDetailMovie)
    }, [])

    return (
        <div className="container">
            <div className="detail--title">
                {
                  actors.map(el => (
                      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                  ))
                }
            </div>


        </div>
    );
};
export default DetailPage

