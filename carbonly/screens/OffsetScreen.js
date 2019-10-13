import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

