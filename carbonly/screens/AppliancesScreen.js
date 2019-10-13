import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
=======
import {View, Button, Text} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
>>>>>>> e83c53ac7f75b831ba4930cd40b08d6b3c1bde62

export default class AppliancesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitleText}>Appliances</Text>
          <Text style={styles.optionsSubTitleText}>Current</Text>
          <Text style={styles.optionsSubTitleText}>Weekly Average</Text>
          <Text style={styles.optionsSubTitleText}>Monthly Average</Text>
          <Text style={styles.optionsSubTitleText}>All-time Average</Text>
      </View>
    );
  }
}

AppliancesScreen.navigationOptions = {
  header: null,
};

