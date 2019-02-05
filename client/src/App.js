import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import config from './config.json';
import BeforeLogin from './Components/beforeLogin/beforeLogin'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
  }

  logout = () => {
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
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
            <img src={`https://graph.facebook.com/${this.state.user.facebookProvider.id}/picture?type=square`} alt=""></img>
          </div>
          <div>
            <button onClick={this.logout} className="button">
              Log out
            </button>
          </div>
          <div>

          </div>
        </div>
      ) : (
        <div>
          <BeforeLogin />
          <FacebookLogin
            appId={config.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={this.facebookResponse} />
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
