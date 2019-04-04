import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category';
import TesScreen from './screens/Tes';
import RemoteRequest from './controllers/RemoteRequest';

const MainNavigator = createStackNavigator(
	{
		Home: {screen: HomeScreen},
		Category: {screen: CategoryScreen},
		Tes: {screen: TesScreen},
		RemoteRequest: {screen: RemoteRequest}
	},
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
