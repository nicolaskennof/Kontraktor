import React, { Component } from "react";
import BeforeLogin from './Components/beforeLogin/beforeLogin'
import AfterLogin from './Components/afterLogin/afterLogin'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
  }

  facebookLogout = () => {
    this.setState({
      isAuthenticated: false,
      token: '',
      user: null
    });
  }

  onFailure = (error) => {
    alert(error);
  }

  facebookResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
        }
      });
    })
  };

  render() {
    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <AfterLogin facebookLogout = {this.facebookLogout} />
        </div>
      ) : (
        <div>
          <BeforeLogin facebookResponse={this.facebookResponse} />
        </div>
      );

    return (
      <div className="App">
        {content}
      </div>
    )
  }
}

export default App;
