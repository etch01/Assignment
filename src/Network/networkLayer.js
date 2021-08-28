import axios from 'axios';

export class NetworkLayer {
  //Private Property for host URL
  #API_HOST;

  constructor() {
    //API Base URL
    this.#API_HOST = 'http://api.themoviedb.org/3';
  }

  //Get Request use then callback to use resolved promise
  get_request = (endpoint, access_token) => {
    const url = this.#API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        let source = axios.CancelToken.source();
        setTimeout(() => {
          source.cancel();
          // Timeout Logic
        }, 31000);
        axios
          .get(url, {
            headers: {
              Token: access_token,
            },
            timeout: 30000,
            cancelToken: source.token,
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => { reject(err) });
      } catch (err) {
        reject(err);
      }
    });
  };
}