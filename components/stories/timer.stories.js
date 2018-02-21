import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Timer from '../Timer';

const stories = storiesOf('Game Elements', module);
stories.addDecorator(withKnobs);

stories.add('Timer', () => {
  const timeLeft = 60;
  const endGame = action('Game Over');
  return (
    <Timer
      gameTime={number('Set Time', timeLeft)}
      endGame={text('Set Text', endGame)}
    />
  );
});
