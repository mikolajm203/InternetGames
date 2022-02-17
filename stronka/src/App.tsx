import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';
import NavBar from './Components/NavBar';


enum Pages{
  Games,
  About
};

function App() {
  const [page, setPage] = useState(Pages.Games)
  if(page == Pages.Games)
    return (
      <div>
        <NavBar onAboutClick={() => setPage(Pages.About)} onGamesClick={() => setPage(Pages.Games)}/>
        <div className="emptyBox"/>
        <Game imgSrc="./gameicon.png" Name="Julcia" Description="Julcia jest fajna"/>
        <Game imgSrc="./game2icon.png" Name="TicTacToe" Description="Win"/>
        <Game imgSrc="" Name="Chess" Description="Chess"/>
      </div>
    )
  else
    return(
      <div>
        <NavBar onAboutClick={() => setPage(Pages.About)} onGamesClick={() => setPage(Pages.Games)}/>
        <div className="emptyBox"/>
        About
      </div>
    )
}

export default App;
