import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';

export default class OffsetScreen extends React.Component {

  static navigationOptions = {
    title: 'Buy a Carbon Offset',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.headerText}>Your ecoPoints: 1000 </Text>
          <View style={styles.button}>
            <Button title="Saving the Forests of Western Oaxaca, Mexico (714 ecoPoints per tonne of CO2e)" onPress={() => this.props.navigation.navigate('Description')}/>
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