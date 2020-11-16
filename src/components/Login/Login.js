import React from 'react'
import './Login.css'

export const Login = () => {
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
            />
            <div className='input-icon input-group-addon'>
              <i className='fa fa-lock fa-lg'></i> 
            </div>
          </div>
        </section>
        <button className='btn' id='button-sign-in' type="submit">Sign In</button>
      </div>
    </div>
  )
}

export default Login
