import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';

export default class AppliancesScreen extends React.Component {
  static navigationOptions = {
    title: 'Appliances',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View style={styles.centerContainer}>
          <Text style={styles.baseText}>Today</Text>
          <Text style={styles.baseText}>Weekly Average</Text>
          <Text style={styles.baseText}>Monthly Average</Text>
          <Text style={styles.baseText}>All-Time</Text>
      </View>
    );
  }
}


