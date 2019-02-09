import React, { Component } from "react";
<<<<<<< HEAD
import BeforeLogin from './Components/beforeLogin/beforeLogin'
import AfterLogin from './Components/afterLogin/afterLogin'
import KontratadoHomepage from './Components/kontratado/kontratadoHomepage/kontratadoHomepage'
import KMessagesPage from './Components/kontratado/kMessagesPage/kMessagesPage'
=======
import BeforeLogin from './Pages/BeforeLogin'
import UserAfterLogin from './Pages/UserAfterLogin'
import KontratadoAfterLogin from './Pages/KontratadoAfterLogin'
import API from './utils/API'
>>>>>>> master

class App extends Component {

  constructor() {
    super();
    this.state = {
      isFacebookAuthenticated: false,
      isKontratadoAuthenticated: false,
      facebookUser: null,
      token: '',
      kontratadoUser: null
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

<<<<<<< HEAD
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
            <AfterLogin />
          </div>

        </div>
      ) : (
        <div>
          <BeforeLogin facebookResponse={this.facebookResponse} />
          <br />
          <KontratadoHomepage />
          <KMessagesPage />
=======
  logKontratado = (idKontratado) => {
    let kontratadoUser;
    API.getKontratado(idKontratado)
      .then(result=>{
        kontratadoUser = result.data;
        this.setState({
          kontratadoUser,
          isKontratadoAuthenticated : true
        });
      })
  }

  logOutKontratado = () => {
    this.setState({
      isKontratadoAuthenticated : false
    });
  }

  kontratadoUpdate = kontratado => {
    this.setState({
      kontratadoUser : kontratado
    })
  }


  chooseRender = () => {
    if (this.state.isFacebookAuthenticated || this.state.isKontratadoAuthenticated){
      if (this.state.isFacebookAuthenticated){
        return <UserAfterLogin facebookLogout = {this.facebookLogout} />
      } else {
        return <div>
          <KontratadoAfterLogin kontratadoUpdate={this.kontratadoUpdate} kontratado = {this.state.kontratadoUser} logOutKontratado={this.logOutKontratado} />
>>>>>>> master
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
