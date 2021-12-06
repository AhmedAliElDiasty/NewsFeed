import React, { ContextType, createContext, } from 'react';
import { I18nManager, Platform, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme, Theme, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, DetailsScreen, SettingsScreen, } from './src/screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getTheme, loadString } from './src/utils/storage/storage';
import RNRestart from "react-native-restart"
import dayjs from "dayjs"
import "dayjs/locale/ar"
import "dayjs/locale/en"
import { translate } from './src/i18n';
import I18n from 'i18n-js';
import { DARK_COLORS, LIGHT_COLORS } from './src/utils/themes/colors';


const Stack = createNativeStackNavigator();
interface ContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'Light',
  setTheme: () => null
});

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined
};
const Tab = createMaterialBottomTabNavigator();



function App() {
  const [theme, setTheme] = React.useState('');

  const themeData = { theme, setTheme };

  function HomeStack() {
    return (
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          statusBarStyle: theme == 'Light' ? 'dark' : 'light',
          headerTintColor: theme == 'Light' ? '#000' : '#fff',
          headerBackTitle: '',
          // headerBackVisible: Platform.OS == 'android' ? false : true,
          headerShown: Platform.OS == 'android' ? false : true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: translate('home.home') as string }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: translate('details.details') as string }} />
      </Stack.Navigator>
    )
  }

  function SettingStack() {
    return (
      <Stack.Navigator screenOptions={{
        title: translate('settings.settings') as string,
        headerTitleAlign: 'center',
        statusBarStyle: theme == 'Light' ? 'dark' : 'light',
        headerShown: Platform.OS == 'android' ? false : true,
      }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    )
  }

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
      const myTheme = await getTheme()
      setTheme(myTheme as string)
      console.log(themeData.theme);
    })()
  }, [])
  const myDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...DARK_COLORS
    }
  }

  const myLightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DarkTheme.colors,
      ...LIGHT_COLORS
    }
  }
  const linking: LinkingOptions<ReactNavigation.RootParamList> | undefined = {
    prefixes: ['news://'],
    config: {
      screens: {
        path: 'home',
        HomeStack: {
          screens: {
            HomeScreen: 'Home',
            DetailsScreen: 'Details',
          },
        },
        SettingStack: {
          path: 'settings',
          screens: {
            SettingsScreen: "Settings",
          }
        }
      },
    }
  };
  return (
    <ThemeContext.Provider value={themeData} >
      <NavigationContainer linking={linking} theme={theme == 'Light' ? myLightTheme : myDarkTheme} >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName: string = '';
              let iconColor: string = '';

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={20} color={focused ? '#00BFFF' : '#777'} />;
            },
          })}
          activeColor='#00BFFF'
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ title: translate('home.home') as string, }} />
          <Tab.Screen name="Settings" component={SettingStack} options={{ title: translate('settings.settings') as string }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider >

  );
}
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default App;
