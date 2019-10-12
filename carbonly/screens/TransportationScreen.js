import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TransportationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Transportation!
        </Text>
      </View>
    );
  }
}

TransportationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

