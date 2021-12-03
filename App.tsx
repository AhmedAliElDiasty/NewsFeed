import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen } from './src/screens';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default App;
