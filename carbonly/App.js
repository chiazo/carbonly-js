import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'

import TravelScreen from './screens/TravelScreen'
import AppliancesScreen from './screens/AppliancesScreen'
import ClimateScreen from './screens/ClimateScreen'
import OffsetScreen from './screens/OffsetScreen'
import DescriptionScreen from './screens/DescriptionScreen'
import PurchaseConfirmationScreen from './screens/PurchaseConfirmationScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'

const AppNavigator = createStackNavigator(
  {
  Register: RegisterScreen,
  Login: LoginScreen,
  Home: HomeScreen,
  Travel: TravelScreen,
  Appliances: AppliancesScreen,
  Climate: ClimateScreen,
  Offset: OffsetScreen,
  Description: DescriptionScreen,
  Purchase: PurchaseConfirmationScreen,
  About: AboutScreen,
  },
  {
    initialRouteName: 'Register',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}