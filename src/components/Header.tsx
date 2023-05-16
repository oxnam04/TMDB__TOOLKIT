import {NavLink} from "react-router-dom";
import {MdDarkMode} from "react-icons/md";

const Header = () => {

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                        <div className="header-logo">
                            <h1 style={{color:"white",fontSize:30}}>Movie-Kyrgyzstan</h1>
                        </div>
                    <div className="nav">
                        <div className="search">
                            <input style={{width: "400px"}} placeholder="Поиск фильмов" type="text"/>
                        </div>
                        <NavLink to={'/user'}>Popular</NavLink>
                        <NavLink to={'/now-playing'}>Now-Playing</NavLink>
                        <NavLink to={'/top-rated'}>Top-Rated</NavLink>
                        <MdDarkMode style={{color: "white"}}/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;