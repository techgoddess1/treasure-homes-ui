import React, { Component } from 'react';

export class PropertyCard extends Component {
  render() {
    return (
      <div
        className='p-card p-component ui-card-shadow'
        style={{ width: '17.3em', height: '21.3em' }}
      >
        <div className='p-card-header'>
          <img alt='Card' src='./assets/images/card-pic.png' />
        </div>
        <div className='p-card-body p-p-0'>
          <div className='p-card-footer p-p-0'>
            <div className='p-grid p-p-3'>
              <span className='p-col-6'>
                <p className='p-m-0 p-p-0'>{this.props.price}</p>
                <p className='p-m-1 p-p-0'>{this.props.state}</p>
                <p className='p-m-0 p-p-0'>{this.props.city}</p>
              </span>
              <span className='p-col-6 p-justify-end'>
                <p className='p-m-0 p-p-0'>{this.props.beds} bedrooms</p>
                <p className='p-m-1 p-p-0'>{this.props.baths} bathrooms</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
