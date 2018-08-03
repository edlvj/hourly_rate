import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './components/HomeScreen.js';
import LoginScreen from './components/LoginScreen.js';

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { logIn } = this.props;
    let initialRoute = logIn == true ? 'HomeScreen' : 'LoginScreen';

    const Navigator = createStackNavigator({
      LoginScreen: {
        screen: LoginScreen
      },
      HomeScreen: {
        screen: HomeScreen
      },
    }, 
    {
      initialRouteName: `${initialRoute}`,
      headerMode: 'none'
    });

    return(
      <Navigator />
    );
  }
}

const mapStateToProps = state => {
  const userReducer = state.userReducer;
  return {
    logIn: userReducer.logIn,
  }
}

export default connect(mapStateToProps)(Index);