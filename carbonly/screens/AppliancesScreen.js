import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class AppliancesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitleText}>Overall Averages</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
        <Text style={styles.optionsTitleText}>Weekly History</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
        <Text style={styles.optionsTitleText}>An Average American</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
      </View>
    );
  }
}

AppliancesScreen.navigationOptions = {
  header: null,
};



