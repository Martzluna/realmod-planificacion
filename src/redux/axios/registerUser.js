import axios from 'axios';
import API from './API';

export function postRegisterUser(data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${API}/create`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
         
        },
        data: JSON.stringify(data)
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  export function postRegisterAgent(data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${API}/agent/create`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
         
        },
        data: JSON.stringify(data)
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }