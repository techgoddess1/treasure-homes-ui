import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PropertyCard } from '../components/PropertyCard';
import './landing.css';

export class Landing extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Ikeja',
      minimum: 0,
      maximum: 0,
      beds: 0,
    };

    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchClick(event) {}
  render() {
    return (
      <div className='p-col-12'>
        <header className='p-grid' style={{ height: '1040px' }}>
          <div className='p-col-12 p-col-m-12 p-col-s-12'>
            <div className='bg-img'>
              {/* <img style={{ width: '100%' }} src='./assets/images/Intersect.png' alt='' /> */}
              <div className='container'>
                <div className='topnav'>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                    HOME
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='#'>
                    HOW IT WORKS
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='#'>
                    FEATURES
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>
                    ABOUT
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='#'>
                    MAKE A PAYMENT
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>
                    SIGNIN
                  </Link>
                  <Link className='' style={{ textDecoration: 'none', color: 'white' }} to='#'>
                    REGISTER
                  </Link>
                </div>
              </div>
            </div>

            <div className='p-grid p-col-12' style={{ marginTop: '150px' }}>
              <div
                className='p-col-6 p-text-left p-text-bold'
                style={{
                  fontSize: '60px',
                  color: 'white',
                  lineHeight: '40px',
                  letterSpacing: '0.0832px',
                }}
              >
                <p>Real Estate Advice</p>

                <p>for real locals.</p>
              </div>
            </div>
          </div>
        </header>

        <div className='p-grid'>
          <div className='p-col-12'>
            <div className='p-grid'>
              <div className='p-col-12 p-grid' style={{ background: '#314862', height: '98px' }}>
                <div className='p-col-7 p-grid p-mt-2 p-ml-3'>
                  <div
                    className='p-shadow-3 p-col-2 p-m-auto p-pt-5'
                    style={{ height: '102px', background: 'white' }}
                  >
                    <span className='p-float-label'>
                      <InputText
                        id='location'
                        value={this.state.location}
                        onChange={(e) => this.setState({ location: e.target.value })}
                        className='p-col-12'
                      />
                      <label htmlFor='location'>Location</label>
                    </span>
                  </div>
                  <div
                    className='p-shadow-3 p-col-2 p-m-auto p-pt-5'
                    style={{ height: '102px', background: 'white' }}
                  >
                    <span className='p-float-label'>
                      <InputText
                        id='minimum'
                        value={this.state.minimum}
                        onChange={(e) => this.setState({ minimum: e.target.value })}
                        className='p-col-12'
                      />
                      <label htmlFor='minimum'>Minimum</label>
                    </span>
                  </div>
                  <div
                    className='p-shadow-3 p-col-2 p-m-auto p-pt-5'
                    style={{ height: '102px', background: 'white' }}
                  >
                    <span className='p-float-label'>
                      <InputText
                        id='maximum'
                        value={this.state.maximum}
                        onChange={(e) => this.setState({ maximum: e.target.value })}
                        className='p-col-12'
                      />
                      <label htmlFor='maximum'>Maximum</label>
                    </span>
                  </div>
                  <div
                    className='p-shadow-3 p-col-2 p-m-auto p-pt-5'
                    style={{ height: '102px', background: 'white' }}
                  >
                    <span className='p-float-label'>
                      <InputText
                        id='beds'
                        value={this.state.beds}
                        onChange={(e) => this.setState({ beds: e.target.value })}
                        className='p-col-12'
                      />
                      <label htmlFor='beds'>Beds</label>
                    </span>
                  </div>
                </div>

                <div className='p-col-4 p-grid p-justify-end'>
                  <div className='p-col-1'>
                    <Button label='SEARCH' onClick={this.onSearchClick} />
                  </div>
                </div>
              </div>

              <div className='p-grid p-col-12 p-mt-6'>
                <div className='p-col-12 p-text-center p-text-uppercase p-text-normal'>
                  <div className='p-grid p-justify-center'>
                    <div className='p-col-7'>
                      <p
                        style={{
                          fontWeight: '600',
                          fontSize: '40px',
                          lineHeight: '54px',
                          color: '#024EFF',
                        }}
                      >
                        About us
                      </p>
                      <p style={{ fontWeight: '600', fontSize: '30px', lineHeight: '41px' }}>
                        A new way for working with professionals.
                      </p>
                    </div>
                  </div>
                  <div className='p-grid'>
                    <div className='p-col-12 p-grid'>
                      <img className='p-col-4 p-m-6' src='./assets/images/storeyed.png' alt='' />
                      <div className='p-col-6 p-m-2 p-text-left'>
                        <p
                          style={{
                            fontSize: '24px',
                            fontWeight: 'normal',
                            lineHeight: '33px',
                            color: '#484848',
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                          vestibulum neque. Suspendisse sollicitudin nulla sem, eu iaculis sapien
                          commodo ac. Vivamus convallis. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Quisque a vestibulum neque. Suspendisse sollicitudin
                          nulla sem, eu iaculis sapien commodo ac.
                        </p>
                        <Button label='LEARN MORE' onClick={this.onSearchClick} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-grid p-mt-6 p-p-6'>
                <p
                  className='p-col-12 p-mb-0 p-pb-0'
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '33px',
                    color: ' #024EFF',
                  }}
                >
                  Recent
                </p>
                <p
                  className='p-col-12 p-mt-0 p-pt-0'
                  style={{
                    fontSize: '40px',
                    fontWeight: '600',
                    lineHeight: '33px',
                    color: '#484848',
                  }}
                >
                  Recently added properties
                </p>

                <div className='p-col-12 p-grid'>
                  <div className='p-col-3' style={{ height: '341px' }}>
                    <PropertyCard price='#500' state='Lagos' city='Ikeja' beds='3' baths='4' />
                  </div>
                  <div className='p-col-3' style={{ height: '341px' }}>
                    <PropertyCard price='#500' state='Lagos' city='Ikeja' beds='3' baths='4' />
                  </div>
                  <div className='p-col-3' style={{ height: '341px' }}>
                    <PropertyCard price='#500' state='Lagos' city='Ikeja' beds='3' baths='4' />
                  </div>
                  <div className='p-col-3' style={{ height: '341px' }}>
                    <PropertyCard price='#500' state='Lagos' city='Ikeja' beds='3' baths='4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div style={{ width: '100%' }}>
            <img style={{ width: '100%' }} src='./assets/images/Rectangle.png' alt='' />
          </div>
          <div className='p-grid p-justify-end'>
            <nav className='p-col-6' style={{ marginTop: '-200px', fontSize: '13px' }}>
              <ul className='p-grid' style={{ listStyle: 'none', textAlign: 'right' }}>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/about'>
                    ABOUT US
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/contact'>
                    CONTACT US
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/faqs'>
                    FAQS
                  </Link>
                </li>
                <li className='p-col-5'>
                  <Link style={{ textDecoration: 'none' }} to='/terms'>
                    TERMS OF SERVICE & PRIVACY POLICY
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}
