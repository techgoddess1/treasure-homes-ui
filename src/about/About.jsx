import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PropertyCard } from '../components/PropertyCard';

export class About extends Component {
  render() {
    return (
      <div>
        <header className='p-grid' style={{ height: '600px' }}>
          <div className='p-col-12'>
            <nav style={{ fontSize: '14px' }} className=''>
              <ul className='p-grid p-text-center' style={{ listStyle: 'none' }}>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/'>
                    HOME
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='#'>
                    HOW IT WORKS
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='#'>
                    FEATURES
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/about'>
                    ABOUT
                  </Link>
                </li>

                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='#'>
                    MAKE A PAYMENT
                  </Link>
                </li>
                <li className='p-col'>
                  <Link style={{ textDecoration: 'none' }} to='/signin'>
                    SIGNIN
                  </Link>
                </li>
                <li className='p-col'>
                  <Link className='' style={{ textDecoration: 'none' }} to='#'>
                    REGISTER
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <img src='./assets/images/family.png' alt='' />
            </div>

            <div className='p-grid p-col-12' style={{ marginTop: '-450px' }}>
              <div
                className='p-col-6 p-text-left p-text-bold'
                style={{
                  fontSize: '60px',
                  color: 'white',
                  lineHeight: '40px',
                  letterSpacing: '0.0832px',
                }}
              >
                <p>Home Means</p>

                <p>Comfort, Care, Memories</p>
                <p>and Happiness</p>
              </div>
            </div>
          </div>
        </header>

        <div className='p-grid'>
          <div className='p-col-12'>
            <div className='p-grid p-m-3 p-justify-center'>
              <img width='80%' src='./assets/images/Rectangle.png' alt='' />
              <div
                className='p-col-7 p-text-center'
                style={{
                  marginTop: '-230px',
                  fontStyle: 'normal',
                  fontWeight: '600px',
                  fontSize: '40px',
                }}
              >
                No matter what stage of the home journey you may be in, we’re here to empower you by
                making all things home simple, efficient, and enjoyable.
              </div>
            </div>

            <div className='p-grid p-justify-center'>
              <div
                className='p-col-6 p-text-center'
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600px',
                  fontSize: '40px',
                  color: '#484848',
                }}
              >
                <p style={{ textDecoration: 'underline', textDecorationColor: '#024EFF' }}>
                  About Us
                </p>

                <p
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    color: '#333333',
                  }}
                >
                  offers a comprehensive list of for-sale properties, as well as the information and
                  tools to make informed real estate decisions. Today, more than ever, offers a
                  comprehensive list of for-sale properties, as well as the information and tools to
                  make informed real estate decisions. Today, more than ever.
                </p>

                <p
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    color: '#333333',
                  }}
                >
                  offers a comprehensive list of for-sale properties, as well as the information and
                  tools to make informed real estate decisions. Today, more than ever, offers a
                  comprehensive list of for-sale properties, as well as the information and tools to
                  make informed real estate decisions. Today, more than ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <img src='./assets/images/Rectangle.png' alt='' />
          <div className='p-grid p-justify-end'>
            <nav
              className='p-col-6'
              style={{
                marginTop: '-200px',
                fontStyle: 'normal',
                fontWeight: '600px',
                fontSize: '13px',
              }}
            >
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
