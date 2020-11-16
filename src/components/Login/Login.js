import React, { useState, useEffect } from 'react'
import './Login.css'
import { Server } from 'miragejs'


// A quick fake api mocking setup with Mirage JS
new Server({
  routes() {
    this.get('/api/login', () => {
      return {
        email: 'frontend@isawesome.com',
        password: 'cool',
      }
    })
  }
})

export const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem('localStorageEmail') || '')
  const [password, setPassword] = useState(localStorage.getItem('localStoragePassword') || '')

  useEffect(() => {
    localStorage.setItem('localStorageEmail', email)
    localStorage.setItem('localStoragePassword', password)
  }, [email, password])


  // A handler to check if email and password input value === to the data in fake api
  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await fetch ('/api/login')
    const data = await response.json()
    email === data.email && password === data.password ? alert('YEAH') : alert('NAH')
  }

  return (
    <div className='login-form-wrapper'>
      <div className='login-form-upper-bar'>Login Form</div>
      <div className='login-form-lower-part'>
        <section className='form-group'>
          <label className='form-control-label sr-only' htmlFor='Username'>
            Username
          </label>
          <div className='input-group'>
            <input 
              required
              className='form-control'
              type='email'
              id='username'
              name='username'
              placeholder='Username'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="input-icon input-group-addon">
              <i className="fa fa-user fa-lg"></i> 
            </div>
          </div>
        </section>
        <section className='form-group'>
          <div className='input-group'>
            <input
              required
              className='form-control'
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className='input-icon input-group-addon'>
              <i className='fa fa-lock fa-lg'></i> 
            </div>
          </div>
        </section>
        <button className='btn' id='button-sign-in' type="submit" onClick={submitHandler}>Sign In</button>
      </div>
    </div>
  )
}

export default Login
