import React, { Component } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Link, Redirect } from 'react-router-dom';
import { UserService } from '../services/UserService';

export class Signin extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      redirect: null,
    };
    this.userService = new UserService();
    this.onLoginClick = this.onLoginClick.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
  }

  showSuccess(message) {
    let msg = { severity: 'success', summary: 'Success Message', detail: message };
    this.toast.show(msg);
  }

  showError(message) {
    let msg = { severity: 'error', summary: 'Error Message', detail: message };
    this.toast.show(msg);
  }

  async onLoginClick(event) {
    try {
      let res = await (await this.userService.signIn(this.state)).data;
      if (res.status === 200) {
        this.setState({ redirect: '/dashboard' });
        this.showSuccess('Logged in successfully');
      } else {
        this.showError('Sign in failed, please try again');
      }
    } catch (error) {
      try {
        this.showError('Sign in failed, please try again');
      } catch (error) {
        console.log('error');
      }
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className='p-grid'>
        <div className='p-col-12 p-p-6'>
          <Toast ref={(el) => (this.toast = el)} />
          <div className='p-grid'>
            <div className='p-col-6'>
              <img src='./assets/images/signin.png' alt='' />
            </div>
            <div className='p-col-6'>
              <p
                style={{
                  fontWeight: '600',
                  fontSize: '60px',
                  lineHeight: '82px',
                  fontStyle: 'normal',
                  color: '#000000',
                }}
              >
                Login to your account.
              </p>
              <p
                style={{
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '25px',
                  fontStyle: 'normal',
                  color: '#484848',
                  marginBottom: '50px',
                }}
              >
                To access all your saved properties, searches, notes and more.
              </p>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='email'
                  style={{ width: '569px' }}
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <label htmlFor='email'>Email</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <Password
                  id='password'
                  style={{ width: '569px' }}
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <label htmlFor='password'>Password</label>
              </span>
              <Button style={{ width: '569px' }} label='Login' onClick={this.onLoginClick} />

              <p>
                Don't have an account? <Link to='/signup'>Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
