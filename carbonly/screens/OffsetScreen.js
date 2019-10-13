import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class OffsetScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Offset ready fo austin
        </Text>
      </View>
    );
  }
}

OffsetScreen.navigationOptions = {
  header: null,
};
