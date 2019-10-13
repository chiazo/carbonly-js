import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class TravelScreen extends React.Component {
  render() {
    return (
      <View style={styles.centerContainer}>
          <Text style={styles.baseText}>Today</Text>
          <Text style={styles.baseText}>Weekly</Text>
          <Text style={styles.baseText}>Monthly</Text>
          <Text style={styles.baseText}>All-Time</Text>
      </View>
    );
  }
}

TravelScreen.navigationOptions = {
  title: "Travel",
};

