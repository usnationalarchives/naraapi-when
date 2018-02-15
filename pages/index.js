import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../reducers/configureStore';
export const store = configureStore();

import NaraGame from '../containers/NaraGame';


const Index = () => (
  <Provider store={store}>
    <NaraGame />
  </Provider>
);

export default Index;
