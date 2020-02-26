import axios from 'axios';

import token from './token';

export const pagseguro = data => {
    axios.post(`https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/email=rilton_moreira@hotmail.com&token=${token}`, {
        data
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}