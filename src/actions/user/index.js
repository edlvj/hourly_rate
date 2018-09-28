import { AsyncStorage } from 'react-native';
import * as TYPE from './types';
import { apiUrl } from '../../../config/index';

export function logIn(opts) {
  return (dispatch) => {
    dispatch({
      'type': TYPE.USER_DO_LOGIN
    });
    
    console.log(apiUrl);
    console.log('send data', opts)

    fetch(`${apiUrl}/rest/auth/1/session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(opts),
      })
      .then((response) => {
        console.log(response.status);
       // let response = response.json();
        if (response.status === 200) {
          console.log('200');
          response.json()
            .then((res) => {
              dispatch({ 
                type: TYPE.USER_LOGGED, 
                user: opts, 
                session: res.session.value });
            });    
        }

        if (/^4.*/.test(response.status)) {
          console.log('4**');
          response.json()
            .then((res) => {
              //console.log(res.errorMessages[].j());
              alert(res["errorMessages"].join(', '));
            });    
        }
      }).catch((e) => {
        console.log(e);
        alert(e.message);
        dispatch({ 'type': TYPE.USER_ERROR, error: e });
      });
  }
}

export function logOut() {
  AsyncStorage.clear();
  // fetch('http://localhost:3000/rest/auth/1/session',
  // {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Cookie': 'sample'
  //   }
  // })
  // .then((response) => {
  //   console.log('error', response);
  //   console.log(response.code);

  //   if (response.code == 200) {
  //     dispatch({ 'type': TYPE.USER_LOGOUT });
  //   }
  // }).catch((e) => {
  //   console.log(e);
  //   alert(e.message);
  //   dispatch({ 'type': TYPE.USER_ERROR, error: e });
  // });
}
