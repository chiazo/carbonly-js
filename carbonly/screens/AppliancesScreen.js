import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class AppliancesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitleText}>Travel</Text>
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

