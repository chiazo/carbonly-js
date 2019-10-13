import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class AppliancesScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.textHierContainer}>
        <Text style={styles.optionsTitleText}>Appliances</Text>
          <Text>Current</Text>
          <Text>Weekly Average</Text>
          <Text>Monthly Average</Text>
          <Text>All-time Average</Text>
      </View>
    );
  }
}

AppliancesScreen.navigationOptions = {
  header: null,
};

