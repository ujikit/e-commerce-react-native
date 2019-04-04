import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category';
import ProductDetailScreen from './screens/ProductDetail';
import TesScreen from './screens/Tes';

const MainNavigator = createStackNavigator(
	{
		Home: {screen: HomeScreen},
		Category: {screen: CategoryScreen},
		ProductDetail: {screen: ProductDetailScreen},
		Tes: {screen: TesScreen}
	},
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
