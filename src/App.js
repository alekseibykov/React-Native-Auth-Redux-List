import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Registration: {screen: RegistrationScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
