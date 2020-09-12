import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { PropertyService } from '../services/PropertyService';
import { PropertyCard } from '../components/PropertyCard';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      properties: null,
      layout: 'grid',
      loading: true,
      first: 0,
      totalRecords: 0,
    };

    this.rows = 6;

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.propertyService = new PropertyService();
    this.onPage = this.onPage.bind(this);
  }

  onLogoutClick(event) {}

  componentDidMount() {
    this.propertyService.getPropertySmall().then((data) => {
      this.datasource = data;
      this.setState({
        totalRecords: data.length,
        products: this.datasource.slice(0, this.rows),
        loading: false,
      });
    });
  }

  onPage(event) {
    this.setState({
      loading: true,
    });
    const startIndex = event.first;
    const endIndex = event.first + this.rows;

    this.setState({
      first: startIndex,
      products: this.datasource.slice(startIndex, endIndex),
      loading: false,
    });
  }

  renderGridItem(data) {
    return (
      <PropertyCard
        price={data.price}
        state={data.state}
        city={data.city}
        beds={data.beds}
        baths={data.baths}
      />
    );
  }

  render() {
    return (
      <div>
        <header className='p-grid'>
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
                  <Button label='Logout' onClick={(e) => this.onLogoutClick} />
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className='p-grid p-p-4'>
          <div className='p-col-12 p-p-6 p-m-6'>
            <div className='p-grid'>
              <div className='p-col-12'></div>

              <div className='p-col-12'>
                <div className=''>
                  <div className='card'>
                    <DataView
                      value={this.state.properties}
                      layout='grid'
                      itemTemplate={this.renderGridItem}
                      lazy
                      paginator
                      paginatorPosition={'both'}
                      rows={this.rows}
                      totalRecords={this.state.totalRecords}
                      first={this.state.first}
                      onPage={this.onPage}
                      loading={this.state.loading}
                    />
                  </div>
                </div>
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
