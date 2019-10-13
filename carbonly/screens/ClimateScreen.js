import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class ClimateScreen extends React.Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.baseText}>Climate ready fo austin</Text>
      </View>
    );
  }
}

ClimateScreen.navigationOptions = {
  title: 'Climate',
};
