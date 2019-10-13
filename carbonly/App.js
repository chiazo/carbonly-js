import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'

import TravelScreen from './screens/TravelScreen'
import AppliancesScreen from './screens/AppliancesScreen'
import ClimateScreen from './screens/ClimateScreen'
import OffsetScreen from './screens/OffsetScreen'

const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Travel: TravelScreen,
  Appliances: AppliancesScreen,
  Climate: ClimateScreen,
  Offset: OffsetScreen,
  Description: DescriptionScreen,
  Purchase: PurchaseConfirmationScreen,
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