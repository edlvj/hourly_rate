
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import SettingsScreen from './src/components/SettingsScreen';

import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Settings: { screen: SettingsScreen },
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default App;