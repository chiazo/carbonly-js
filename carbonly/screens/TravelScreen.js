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
        <Button title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        <Text style={styles.optionsTitleText}>Travel</Text>
          <Text style={styles.optionsSubTitleText}>Today</Text>
          <Text style={styles.optionsSubTitleText}>Weekly</Text>
          <Text style={styles.optionsSubTitleText}>Monthly</Text>
          <Text style={styles.optionsSubTitleText}>All-time Average</Text>
      </View>
    );
  }
}

TravelScreen.navigationOptions = {
  header: null,
};

