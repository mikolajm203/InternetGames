import React from "react";
import { isPropertySignature } from "typescript";
import "./Game.css";

interface gameProps{
    Name: string;
    imgSrc: string;
    Description: string;
}
function Game(props:gameProps){
    return(
        <div id="frame">
            <hr/>
            <div className="container">
                <img src={props.imgSrc} alt="Image"/>
                <h2>{props.Name}</h2>
            </div>
            <div id="CenterContainer">
                <p id="description">
                    {props.Description}
                </p>
                <button id="PlayButton">Play</button>
            </div>
            <hr id="bottomHr"/>
        </div>
    )
}

export default Game;