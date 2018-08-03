import * as TYPE from './types';

export function getWorklog() {
  dispatch({
    'type': TYPE.WORKLOG_LOADING
  });
  
  const email = 'gorachedik96@gmail.com';
  const date = '2018-06-18';
  // moment().format('MMM D, YYYY');

  let uri = `worklogAuthor=#{email} AND statuscategory != done AND worklogDate >=#{ date } AND worklogDate <=#{ date }&fields=worklog`;
  console.log(uri);
  fetch(`https://zapleo.atlassian.net/rest/auth/1/session?jql=#{encodeURI(uri)}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'cookie': 'sample' 
    }
  })
  .then((response) => { return response.json() })
  .then((res) => {
    if (res.code == 200) {
      dispatch({ 
        'type': TYPE.WORKLOG_LOADED, 
        worklogs: response 
      });
    }
  }).catch((e) => {
    alert(e.message);
    dispatch({
      'type': TYPE.WORKLOG_ERROR, 
      error: e 
    });
  });
}