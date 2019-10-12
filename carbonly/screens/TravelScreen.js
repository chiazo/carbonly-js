import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

