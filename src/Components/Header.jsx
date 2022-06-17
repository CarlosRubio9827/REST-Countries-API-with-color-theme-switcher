import React,{useState} from "react";
import 'Styles/header.scss'
import {Link} from 'react-router-dom';
import { BsFillBrightnessHighFill, BsMoonFill } from 'react-icons/bs'
// AiOutlineSearch
const Header = (props)=>{

    const [darkMode, setDarkMode] = useState(false);
    


    return (
        <header className="header">
            <Link to={"/"}>
                <p>What in the world?</p>
            </Link>
            <article onClick={()=>{
                    props.toggleThemeChange();
                    setDarkMode(!darkMode)
                }
            } className="header-mode">
                {(darkMode)?
                    <div className="header-mode-theme">
                        <BsFillBrightnessHighFill className="header-mode-theme-icon"/>
                        <p>Light Mode</p>
                    </div>
                :
                    <div className="header-mode-theme">
                        <BsMoonFill className="header-mode-theme-icon"/>
                        <p>Dark Mode</p>
                    </div>
                }
            </article>
        </header>
        )
}

export default Header;
