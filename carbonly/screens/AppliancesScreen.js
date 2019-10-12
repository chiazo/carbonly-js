import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class AppliancesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Appliances ready fo austin
        </Text>
      </View>
    );
  }
}

AppliancesScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

