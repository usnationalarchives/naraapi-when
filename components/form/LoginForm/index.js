import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogIn: props.onLogIn,
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onLogIn } = this.props;
    fetch('https://catalog.archives.gov/api/v1/login?user=' + this.state.username + '&password=' + this.state.password, {
      method: 'POST'
    }).then(function(response) {
      return response.json()
    }).then(function(body){
      if(body.opaResponse.header['@status'] == '200') {
        onLogIn(body.opaResponse.user.id, body.opaResponse.credentials);
      }
    })
    this.setState({password: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input type='text' value={this.state.username} name='username' onChange={this.handleChange} />
        </label>
        <label>
          Password
          <input type='password' value={this.state.password} name='password' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default LoginForm;
