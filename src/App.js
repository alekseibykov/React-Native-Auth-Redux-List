import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import RegistrationScreen from './RegistrationScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Registration: {screen: RegistrationScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
