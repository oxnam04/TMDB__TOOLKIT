import React from 'react';
import './App.css';
import User from "./components/User";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Header from "./components/Header";
import DetailPage from "./components/detailPage/DetailPage";

function App() {

    return (
        <div className="App">
            <Header/>
         <Routes>
             <Route path={'/'} element={<User/>}/>
             <Route path={'/now-playing'} element={<NowPlaying/>}/>
             <Route path={'/top-rated'} element={<TopRated/>}/>
             <Route path={'/detail-page'} element={<DetailPage/>}/>
         </Routes>
        </div>
    );
}

export default App;
