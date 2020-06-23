import React from 'react'
import firebase from './firebase'
import app from 'firebase/app'
import 'firebase/firestore'
import { doc } from 'prettier'

const styles = {
  margin: '20px auto',
  maxWidth: '90%',
  padding: '20px',
  width: '475px',
}

const FirebaseDemo = () => {
  const emailLogin = (event: any) => {
    const { email, password } = event.target.elements

    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res: any) => (res.user as any).providerData)
      .catch((error: any) => alert(error))
  }

  const googleLogin = () => {
    const provider = new app.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('google login', result)
      })
  }

  const guestLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(res => (res.user as any).providerData)
      .then(res => {
        console.log('guest login', res)
      })
      .catch(error => alert(error))
  }

  const githubLogin = () => {
    const provider = new app.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('github login', result)
      })
  }

  const facebookLogin = () => {
    const provider = new app.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('facebook login', result)
      })
  }

  const addItem = () => {
    firebase
      .firestore()
      .collection('teams')
      .doc('BSK')
      .set({ name: 'Basingstoke' })
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err))
  }

  const getItems = () => {
    firebase
      .firestore()
      .collection('teams')
      .get(/* { source: 'cache' } */)
      .then(res => res.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      .then(docs => console.log(docs))
      .catch(err => console.log('err', err))
  }

  const deleteItem = () => {
    firebase
      .firestore()
      .collection('teams')
      .doc("Jz1yF3KzydnUDeaMuy0v")
      .delete()
      // .then(res => res.docs.map(doc => doc.data()))
      .then(doc => console.log('doc', doc))
      .catch(err => console.log('err', err))
  }

  const getItem = () => {
    firebase
      .firestore()
      .collection('teams')
      .doc('BSK')
      .get()
      // .then(res => res.docs.map(doc => doc.data()))
      .then(doc => console.log('doc', doc.data()))
      .catch(err => console.log('err', err))
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
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-3"><button onClick={getItems} className="btn btn-link btn-block">Get All</button></div>
        <div className="col-3"><button onClick={getItem} className="btn btn-link btn-block">Get One</button></div>
        <div className="col-3"><button onClick={addItem} className="btn btn-link btn-block">Add</button></div>
        <div className="col-3"><button onClick={deleteItem} className="btn btn-link btn-block">DELETE</button></div>
      </div>
    </div>
  )
}

export default FirebaseDemo
