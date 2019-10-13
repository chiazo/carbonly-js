import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class AppliancesScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.centerContainer}>
          <Text style={styles.baseText}>Current</Text>
          <Text style={styles.baseText}>Weekly Average</Text>
          <Text style={styles.baseText}>Monthly Average</Text>
          <Text style={styles.baseText}>All-time Average</Text>
      </View>
    );
  }
}
AppliancesScreen.navigationOptions = {
  title: 'Appliances',
};


