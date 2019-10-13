import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';

export default class TravelScreen extends React.Component {

  static navigationOptions = {
    title: 'Travel',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View style={styles.centerContainer}>
          <Text style={styles.baseText}>Today</Text>
          <Text style={styles.baseText}>Weekly</Text>
          <Text style={styles.baseText}>Monthly</Text>
          <Text style={styles.baseText}>All-time Average</Text>
      </View>
    );
  }
}
