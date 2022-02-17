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
        <Game imgSrc="./gameicon.png" Name="Julcia" Description="Julcia jest fajna"/>
        <Game imgSrc="./game2icon.png" Name="TicTacToe" Description="Win"/>
      </div>
    )
  else
    return(
      <div>
        <NavBar onAboutClick={() => setPage(Pages.About)} onGamesClick={() => setPage(Pages.Games)}/>
        About
      </div>
    )
}

export default App;
