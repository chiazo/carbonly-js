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

        <View style={styles.button}>
          <Button title="[Full Name] ([points per tonne] points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
        </View>
        <View style={styles.button}>
          <Button title="Support the Protection of Endangered Orangutans. (659 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>
        <View style={styles.button}>
          <Button title="Protect the Alto Mayo Peruvian Forest. (879 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>

      </View>
    );
  }
}
OffsetScreen.navigationOptions = {
  title: 'Buy a Carbon Offset',
};


