import axios from 'axios';

export class PropertyService {
  getPropertySmall() {
    return axios.get('assets/demo/data/cars-small.json').then((res) => res.data.data);
  }

  getPropertyMedium() {
    return axios.get('assets/demo/data/cars-medium.json').then((res) => res.data.data);
  }

  getPropertyLarge() {
    return axios.get('assets/demo/data/cars-large.json').then((res) => res.data.data);
  }
}
