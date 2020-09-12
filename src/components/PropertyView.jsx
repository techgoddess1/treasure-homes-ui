import React, { Component } from 'react';

export class PropertyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      layout: 'grid',
      loading: true,
      first: 0,
      totalRecords: 0,
    };

    this.rows = 6;

    this.propertyService = new ProductService();
    this.itemTemplate = this.itemTemplate.bind(this);
    this.onPage = this.onPage.bind(this);
  }
  render() {
    return <div></div>;
  }
}
