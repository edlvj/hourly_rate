import * as TYPE from './types';

export function logIn(opt) {
  return (dispatch) => {
    dispatch({
      'type': TYPE.USER_DO_LOGIN
    });

    fetch('https://zapleo.atlassian.net/rest/auth/1/session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: opts,
      })
      .then((response) => { return response.json() })
      .then((res) => {
        if (res.code == 200) {
          console.log(response);
          dispatch({ 'type': TYPE.USER_LOGGED, user: response });
        }
      }).catch((e) => {
        alert(e.message);
        dispatch({ 'type': TYPE.USER_ERROR, error: e });
      });
  }
}

export function logOut() {
  return {
      'type': TYPES.USER_LOGOUT
  }
}
