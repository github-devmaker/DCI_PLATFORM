import { TextField } from '@material-ui/core'
import React, { Component } from 'react'

export class LoginPage extends Component {
  render() {
    return (
     <>
      <div>Login</div>
      <TextField label = 'Enter your id' variant='outlined'/>
      </>
    )
  }
}

export default LoginPage
