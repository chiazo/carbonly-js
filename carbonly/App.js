import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import TransportationScreen from './screens/TransportationScreen'

const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Transportation: TransportationScreen,
  /*Appliances: AppliancesScreen,
  Climate: ClimateScreen,
  Offsets: OffsetsScreen,*/
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