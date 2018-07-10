
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';

import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default App;