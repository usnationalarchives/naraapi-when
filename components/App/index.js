import React from 'react';

import Intro from '../Intro';
import Header from '../Header';
import Button from '../form/Button';
import Slider from '../Slider';

const App = ({ gameState, onStartClick, onEndGame, onGuessYear }) => {
  return (
    <div className="container">
      {(!gameState.gameActive) &&
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
        </div>
      }
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700');
        html {
          font-size:10px;
        }
        body {
          font-size:16px;
          background:#0071bc;
          color:#fff;
          font-family:"Source Sans Pro", sans-serif;
          text-align:center;
          margin:0;
          background:linear-gradient( to top right, #235692, #20bee4 );
          background-size:cover;
        }
        .container {
          width:100%;
          max-width:40rem;
          margin:0 auto;
          overflow:hidden;
          height:100vh;
        }
      `}</style>
    </div>
  );
};

export default App;
