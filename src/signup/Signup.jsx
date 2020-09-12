import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Link, Redirect } from 'react-router-dom';
import { UserService } from '../services/UserService';

export class Signup extends Component {
  constructor() {
    super();
    console.log('sample');
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      gender: '',
      street: '',
      city: '',
      state: '',
      country: '',
      phone: '',
      zip: '',
      redirect: null,
    };
    this.userService = new UserService();
    this.onSignupClick = this.onSignupClick.bind(this);
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

  async onSignupClick(event) {
    try {
      let res = await (await this.userService.signUp(this.state)).data;
      if (res.status === 201) {
        this.setState({ redirect: '/dashboard' });
        this.showSuccess('Registered successfully');
      } else {
        this.showError('Registration failed, please try again');
      }
    } catch (error) {
      try {
        this.showError('Registration failed, please try again');
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
                Create an account with us.
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
                  id='firstname'
                  style={{ width: '569px' }}
                  value={this.state.firstname}
                  onChange={(e) => this.setState({ firstname: e.target.value })}
                />
                <label htmlFor='firstname'>Firstname</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='lastname'
                  style={{ width: '569px' }}
                  value={this.state.lastname}
                  onChange={(e) => this.setState({ lastname: e.target.value })}
                />
                <label htmlFor='lastname'>Lastname</label>
              </span>
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
              <span className='p-float-label p-mb-5'>
                <Password
                  id='confirmpassword'
                  style={{ width: '569px' }}
                  value={this.state.confirmpassword}
                  onChange={(e) => this.setState({ confirmpassword: e.target.value })}
                />
                <label htmlFor='confirmpassword'>Confirm Password</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='gender'
                  style={{ width: '569px' }}
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                />
                <label htmlFor='gender'>Gender</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='street'
                  style={{ width: '569px' }}
                  value={this.state.street}
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
                <label htmlFor='street'>Street</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='city'
                  style={{ width: '569px' }}
                  value={this.state.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
                <label htmlFor='city'>City</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='state'
                  style={{ width: '569px' }}
                  value={this.state.state}
                  onChange={(e) => this.setState({ state: e.target.value })}
                />
                <label htmlFor='state'>State</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='country'
                  style={{ width: '569px' }}
                  value={this.state.country}
                  onChange={(e) => this.setState({ country: e.target.value })}
                />
                <label htmlFor='country'>Country</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='phone'
                  style={{ width: '569px' }}
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <label htmlFor='phone'>Phone</label>
              </span>
              <span className='p-float-label p-mb-5'>
                <InputText
                  id='zip'
                  style={{ width: '569px' }}
                  value={this.state.zip}
                  onChange={(e) => this.setState({ zip: e.target.value })}
                />
                <label htmlFor='zip'>Zip</label>
              </span>
              <Button style={{ width: '569px' }} label='Signup' onClick={this.onSignupClick} />

              <p>
                Already have an account? <Link to='/signin'>Signin</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
