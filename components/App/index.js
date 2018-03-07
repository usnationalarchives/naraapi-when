import React from 'react';
import Head from 'next/head';

import Intro from '../Intro';
import Header from '../Header';
import Button from '../form/Button';
import Result from '../Result';
import Slider from '../Slider';
import Bonus from '../Bonus';
import LoginForm from '../form/LoginForm';

const App = ({ gameState, userState, onStartClick, onEndGame, onGuessYear, onTagItem, onLogIn, onSeeResults }) => {
  return (
    <div className="container">
      <Head>
        <title>When Am I?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {(!userState.token && !userState.loggedIn) &&
        <LoginForm onLogIn={onLogIn} />
      }
      
      {(!gameState.gameActive && !gameState.gameOver) &&
        <Intro
          startGame={() => onStartClick()}
        />
      }
      {(gameState.gameActive && !gameState.isFetching) &&
        <div>
          <Header
            gameTime={gameState.gameTime}
            endGame={onEndGame}
            size={50}
            score={gameState.score}
          />
          <Slider
            itemData={gameState.data.opaResponse.results.result}
            currentItem={gameState.currentItem}
            onGuessYear={onGuessYear}
          />
          <img className={"nara-bottom"} src={"/static/nara-text-white.png"} alt={"National Archives"} />
        </div>
      }
      {(!gameState.gameActive && gameState.gameOver && !gameState.seeResults) &&
        <div>
          <Bonus 
            itemData={gameState.data.opaResponse.results.result}
            currentItem={gameState.currentItem}
            onTagItem={onTagItem}
            onSeeResults={onSeeResults}
            token={userState.token}
          />
          <img className={"nara-bottom"} src={"/static/nara-text-white.png"} alt={"National Archives"} />
        </div>
      }
      {(gameState.gameOver && gameState.seeResults) &&
        <div>
          <Result
            score={gameState.score}
          />
          <img className={"nara-bottom"} src={"/static/nara-text-white.png"} alt={"National Archives"} />
        </div>
      }

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700');
        html {
          font-size:10px;
        }
        body {
          font-size:16px;
          color:#fff;
          font-family:"Source Sans Pro", sans-serif;
          text-align:center;
          margin:0;
          background:url('/static/tiles1.png') #0071bc;
          background-size:cover;
          background-position:top center;
          transition:background-image 1s;
        }
        .container {
          width:100%;
          min-height:100vh;
          max-width:40rem;
          margin:0 auto;
          overflow:hidden;
        }
        .nara-bottom {
          margin-top:5rem;
          max-width:14.7rem;
        }
      `}</style>
    </div>
  );
};

export default App;
