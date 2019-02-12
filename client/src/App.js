import React, { Component } from "react"
import BeforeLogin from './Pages/BeforeLogin'
import UserAfterLogin from './Pages/UserAfterLogin'
import KontratadoAfterLogin from './Pages/KontratadoAfterLogin'
import API from './utils/API'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isFacebookAuthenticated: false,
      isKontratadoAuthenticated: false,
      facebookUser: null,
      token: '',
      kontratadoUser: null,
      favorites:[],
      messages:[],
      fullfav:[]
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
      console.log(r);
      const token = r.headers.get('x-auth-token');
      r.json().then(facebookUser => {
        if (token) {
          this.setState({ isFacebookAuthenticated: true, facebookUser, token })
            this.state.facebookUser.favourites.map(favourite=>{
              API.getFavourite(favourite).then(result=>{
                console.log(result)
                let pushing=[];
                pushing.push(result)
                this.setState({favorites: pushing})
                  console.log("we are trying to get professions");
    
              })
        })
        
      }
    })
  });
}

getkon=()=>{
let a1=[];
    this.state.favorites.map(kontratado=>{
    API.getKontratado(kontratado.data._id).then(res=>{
    console.log("we received a profession", res);
    
    a1.push(res.data);
    this.setState({fullfav: a1})
  })
  })}


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
        return <UserAfterLogin userId={this.state.facebookUser._id} getkon={this.getkon} addFavs={this.addFavs} fullfav={this.state.fullfav}  facebookLogout = {this.facebookLogout} />
      } else {
        return <div>
          <KontratadoAfterLogin kontratadoUpdate={this.kontratadoUpdate} kontratado = {this.state.kontratadoUser} logOutKontratado={this.logOutKontratado} />
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
