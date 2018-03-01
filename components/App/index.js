import React from 'react';

import Button from '../form/Button';
import Score from '../Score';
import Slider from '../Slider';
import Timer from '../Timer';

const App = ({ gameState, onStartClick, onEndGame, onGuessYear }) => {
  return (
    <div className="container">
      <h1>When Am I?</h1>
      <Button
        btnText={'Click to start game'}
        onClick={() => onStartClick()}
        btnRole={'afterText'}
        btnColor={'blue'}
      />
      {(gameState.gameActive && !gameState.isFetching) &&
        <div>
          <Timer
            gameTime={gameState.gameTime}
            endGame={onEndGame}
            size={50}
          />
          <Score score={gameState.score} />
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
        }
        .container {
          width:100%;
          max-width:40rem;
          margin:0 auto;
        }
      `}</style>
    </div>
  );
};

export default App;
