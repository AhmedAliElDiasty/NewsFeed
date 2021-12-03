import * as React from 'react';
import { View, Text, Button, I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, DetailsScreen, SettingsScreen, } from './src/screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loadString } from './src/utils/storage/storage';
import RNRestart from "react-native-restart"
import dayjs from "dayjs"
import "dayjs/locale/ar"
import "dayjs/locale/en"
import { translate } from './src/i18n';
import I18n from 'i18n-js';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined
};
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: translate('home.home') as string }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: translate('details.details') as string }} />
    </Stack.Navigator>
  )
}

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: translate('settings.settings') as string, headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
function App() {
  React.useEffect(() => {
    ; (async () => {
      const lang = await loadString("lang")
      if (lang === "en") {
        I18nManager.forceRTL(false)
        I18n.locale = "en"
        I18nManager.isRTL && RNRestart.Restart()
        dayjs.locale("en")
      } else {
        I18nManager.forceRTL(true)
        I18n.locale = "ar"
        !I18nManager.isRTL && RNRestart.Restart()
        dayjs.locale("ar")
      }
      //test
    })()
  }, [I18nManager])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ title: translate('home.home') as string }} />
        <Tab.Screen name="Settings" component={SettingStack} options={{ title: translate('settings.settings') as string }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default App;
