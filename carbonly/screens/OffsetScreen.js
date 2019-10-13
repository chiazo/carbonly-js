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
        <Text style={styles.headerText}>Your ecoPoints: [totalPoints] </Text>
          <View style={styles.button}>
            <Button title="[Full Name] ([ppt] ecoPoints per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
          </View>
          <View style={styles.button}>
            <Button title="[Full Name] ([ppt] ecoPoints per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
          </View>
          <View style={styles.button}>
            <Button title="[Full Name] ([ppt] ecoPoints per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
          </View>
      </View>
    );
  }
}
OffsetScreen.navigationOptions = {
  title: 'Buy a Carbon Offset',
};


