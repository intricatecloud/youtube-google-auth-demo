import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  insertGapiScript() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }

  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '886474662299-pjvv2e3midhh92e51v7hrlgn49mr5mvp.apps.googleusercontent.com'
      })
      console.log('Api inited')

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: () => {
            console.log('User has finished signing in!')
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })
    })
  }

  componentDidMount() {
    console.log('Loading')

    this.insertGapiScript();
  }

  render() {
    return (
      <div className="App">
        <h1>Google Login Demo</h1>
        <a id="loginButton">Sign in with Google</a>
      </div>
    );
  }
}

export default App;
