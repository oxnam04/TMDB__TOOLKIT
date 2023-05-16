import React from 'react';
import './App.css';
import User from "./components/User";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Header from "./components/Header";
import DetailPage from "./components/detailPage/DetailPage";
import ActorBiography from "./components/detailPage/actors/ActorBiogra[hy/ActorBiography";
import MovieActors from "./components/detailPage/actors/MovieActors";

function App() {

    return (
        <div className="App">
            <Header/>
         <Routes>
             <Route path={'/user'} element={<User/>}/>
             <Route path={'/now-playing'} element={<NowPlaying/>}/>
             <Route path={'/top-rated'} element={<TopRated/>}/>
             <Route path={'/movie/:movie_id'} element={<DetailPage/>}/>
             <Route path={'/actorBiography/:actorId'} element={<ActorBiography/>}/>
             <Route path={'/movie/movieId-results/:movieId'} element={<MovieActors/>}/>
         </Routes>
        </div>
    );
}

export default App;
