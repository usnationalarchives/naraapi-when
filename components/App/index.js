import React from 'react';

import Button from '../form/Button';
import Score from '../Score';
import Slider from '../Slider';
import Timer from '../Timer';

const App = ({ gameState, onStartClick, onEndGame, onGuessYear }) => {
  return (
    <div>
      <h1>When Am I?</h1>
      <Button 
        btnText={"Click to start game"}
        onClick={() => onStartClick()}
      />
      {(gameState.gameActive && !gameState.isFetching) && 
        <div>
          <Timer
            gameTime={gameState.gameTime}
            endGame={onEndGame}
          />
          <Score score={gameState.score} />
          <Slider 
            itemData={gameState.data.opaResponse.results.result}
            currentItem={gameState.currentItem}
            onGuessYear={onGuessYear}
          />
        </div>
      }
    </div>
  );
};

export default App;