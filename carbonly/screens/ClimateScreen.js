import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';

export default class ClimateScreen extends React.Component {

  static navigationOptions = {
    title: 'Climate',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.baseText}>Climate ready fo austin</Text>
      </View>
    );
  }
}

