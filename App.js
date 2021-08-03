import React from 'react';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        >
          <AppNavigator />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaProvider>
  );
}


// import React from 'react';
// import GlobalStyles from './GlobalStyles';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { Provider } from "react-redux";
// import HomeScreen from './screens/HomeScreen';
// import { store } from './store';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MapScreen from './screens/MapScreen';
// import EatsScreen from './screens/EatsScreen';

// export default function App() {
//   const Stack = createStackNavigator();

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//       <SafeAreaProvider>
//       <SafeAreaView style={GlobalStyles.droidSafeArea}>
//       <Stack.Navigator>
//           <Stack.Screen 
//             name='HomeScreen'
//             component={HomeScreen}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen 
//             name='MapScreen'
//             component={MapScreen}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen 
//             name='EatsScreen'
//             component={EatsScreen}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </SafeAreaView>
//       </SafeAreaProvider>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
