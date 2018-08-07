import * as TYPE from './types';

export function getWorklog(username, session) {
  return (dispatch) => {
    dispatch({
      'type': TYPE.WORKLOG_LOADING
    });

    console.log(username);
    console.log(session);
    
    const email = 'gorachedik96@gmail.com';
    const date = '2018-06-18';
    // moment().format('MMM D, YYYY');

    let uri = `worklogAuthor=#{email} AND statuscategory != done AND worklogDate >=#{ date } AND worklogDate <=#{ date }&fields=worklog`;
    console.log(uri);

    // https://zapleo.atlassian.net/rest/api/2/search?jql=#{encodeURI(uri)}
    fetch(`http://d852959c.ngrok.io/rest/api/2/search?jql=#{encodeURI(uri)`,
    {
      headers: {
        'Content-Type': 'application/json',
        'cookie': 'sample' 
      }
    })
    .then((response) => {
      if (response.status === 200) {
        console.log('200');
        response.json()
          .then((res) => {
            dispatch({ 'type': TYPE.WORKLOG_LOADED, worklogs: res });
          });    
      }

      if (/^4.*/.test(response.status)) {
        response.json()
          .then((res) => {
            alert(res["errorMessages"].join(', '));
          });    
      }
      
    }).catch((e) => {
      alert(e.message);
      dispatch({
        type: TYPE.WORKLOG_ERROR, 
        error: e 
      });
    });
  }
}