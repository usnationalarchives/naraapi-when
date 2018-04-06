import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fetch from 'isomorphic-unfetch';

import configureStore from '../reducers/configureStore';
export const store = configureStore();

import NaraGame from '../containers/NaraGame';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://catalog.archives.gov/api/v1/login?user=' + process.env.USERNAME + '&password=' + process.env.PASSWORD, {
      method: 'POST'
    });
    const json = await res.json();
    return { loginData: {
      userName: json.opaResponse.user.id,
      serverToken: json.opaResponse.credentials
    } }
  }

  render() {
    return (
      <Provider store={store}>
        <NaraGame loginData={this.props.loginData}/>
      </Provider>
    );
  }
}

export default Index;
