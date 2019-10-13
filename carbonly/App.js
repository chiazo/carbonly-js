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
import AboutScreen from './screens/AboutScreen'

const AppNavigator = createStackNavigator(
  {
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
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}