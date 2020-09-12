import Axios from 'axios';

export class UserService {
  constructor() {
    this.server = Axios.create({
      baseURL: 'https://treasure-homes.herokuapp.com/api/v1/',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    });
  }
  async signUp(data) {
    const res = await this.server.post('auth/signup', {
      email: data.email,
      first_name: data.firstname,
      last_name: data.lastname,
      gender: data.gender,
      street: data.street,
      city: data.city,
      state: data.state,
      country: data.country,
      phone: data.phone,
      zip: data.zip,
      password: data.password,
      is_admin: false,
    });
    return res;
  }

  async signIn(data) {
    const res = await this.server.post('auth/signin', {
      email: data.email,
      password: data.password,
    });
    return res;
  }
}
