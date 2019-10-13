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
      <View style={styles.centerContainer}>
        <Text style={styles.headerText}>Your Points: </Text>
          <Button title="Save Forests in Western Oaxaca, Mexico. (714 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
          <Button title="Support the Protection of Endangered Orangutans. (659 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
          <Button title="Protect the Alto Mayo Peruvian Forest. (879 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
      </View>
    );
  }
}
OffsetScreen.navigationOptions = {
  title: 'Offset',
};


