import React, { Component } from "react";
import BeforeLogin from './Components/beforeLogin/beforeLogin'
import AfterLogin from './Components/afterLogin/afterLogin'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isFacebookAuthenticated: false,
      isKontratadoAuthenticated: false,
      facebookUser: null,
      token: ''
    };
  }

  facebookLogout = () => {
    this.setState({
      isFacebookAuthenticated: false,
      token: '',
      facebookUser: null
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
      r.json().then(facebookUser => {
        if (token) {
          this.setState({ isFacebookAuthenticated: true, facebookUser, token })
        }
      });
    })
  };

  logKontratado = () => {
    this.setState({
      isKontratadoAuthenticated : true
    });
  }

  logOutKontratado = () => {
    this.setState({
      isKontratadoAuthenticated : false
    });
  }

  chooseRender = () => {
    if (this.state.isFacebookAuthenticated || this.state.isKontratadoAuthenticated){
      if (this.state.isFacebookAuthenticated){
        return <AfterLogin facebookLogout = {this.facebookLogout} />
      } else {
        return <div>
          {/* Aqui va la página de AfterLoginKontratado */}
          <h1>Hola Kontratado</h1>
          <button onClick={this.logOutKontratado}>Adios paisano</button>
        </div>
      }
    } else {
      return <BeforeLogin logKontratado = {this.logKontratado} facebookResponse={this.facebookResponse} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.chooseRender()}
      </div>
    )
  }
}

export default App;
