import { StyleSheet } from 'react-native';
import Categories from './screens/Categories.js';
import MealDetails from './screens/MealDetails.js';
import Meals from './screens/Meals.js';
import { Provider } from 'react-redux';
import store from './store.js';


// You can import supported modules from npm
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/** les imports utilisés pour Stack navigation : 
 * npm install @react-navigation/native
 * npm install react-native-screens react-native-safe-area-context
 * npm i @react-navigation/native-stack
 */


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    
    <Provider store={store}>
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} options={{title : " All categories"}} />
      <Stack.Screen name="MealDetails" component={MealDetails} options={{title : "About the meal"}}/>
      <Stack.Screen name="Meals" component={Meals} options={{title : "Meals Overview"}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({});
