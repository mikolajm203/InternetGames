import React from "react";
import "./NavBar.css"

interface NavBarProps{
    onAboutClick: () => void,
    onGamesClick: () => void
}
function NavBar(props: NavBarProps){
    return(
        <div className="NavBar">
            <img className="image" src="./logo.png"/>
            <button onClick={props.onGamesClick} className="asText">Games</button>
            <button onClick={props.onAboutClick} className="asText">About</button>
        </div>
    )
}

export default NavBar;