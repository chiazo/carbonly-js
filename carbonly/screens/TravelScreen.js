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
      <View style={styles.container}>
        <Text>
          Travel ready fo austin
        </Text>
      </View>
    );
  }
}

TravelScreen.navigationOptions = {
  header: null,
};

