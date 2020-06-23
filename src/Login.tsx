import React from 'react'
import app from './firebase'
import firebase from 'firebase/app'

const styles = {
  margin: '20px auto',
  maxWidth: '90%',
  padding: '20px',
  width: '420px',
}

const Login = ({ history }: any) => {
  const emailLogin = (event: any) => {
    const { email, password } = event.target.elements

    app
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res: any) => (res.user as any).providerData)
      .catch((error: any) => alert(error))
  }

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    app
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('google login', result)
      })
  }

  const guestLogin = () => {
    app
      .auth()
      .signInAnonymously()
      .then(res => (res.user as any).providerData)
      .then(res => {
        console.log('guest login', res)
        history.push('/')
      })
      .catch(error => alert(error))
  }

  const githubLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    app
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('github login', result)
      })
  }

  const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    app
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('facebook login', result)
      })
  }

  return (
    <div className="card" style={styles}>
      <h1>Log in</h1>
      <form onSubmit={emailLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Log in
        </button>
      </form>
      <hr />
      <button onClick={googleLogin} className="btn btn-danger btn-block">
        Log in with google
      </button>
      <button onClick={githubLogin} className="btn btn-secondary btn-block">
        Log in with github
      </button>
      <button onClick={facebookLogin} className="btn btn-info btn-block">
        Log in with facebook
      </button>
      <button onClick={guestLogin} className="btn btn-primary btn-block">
        Log in as guest
      </button>
    </div>
  )
}

export default Login
