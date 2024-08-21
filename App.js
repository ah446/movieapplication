// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './src/LoginScreen';
// import SignupScreen from './src/SignupScreen';
// import Home from './src/Home';
// // import other screens as needed

// const Stack = createStackNavigator();
// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Login">
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="Signup" component={SignupScreen} />
//                 <Stack.Screen name="Home" component={Home} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import SettingsScreen from './src/SettingsScreen';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
console.log("dsadas")
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
