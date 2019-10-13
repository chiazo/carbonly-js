import React from 'react';
import {
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import logo from '../assets/images/logo.png';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.headerImage} />
        <Text style={styles.headerText}>CO2e Emissions: [CO2e Emissions] tonnes</Text>
        <Text style={styles.headerText}>CO2e Offset: [CO2e Offsets] tonnes</Text>
        <Text style={styles.headerText}>ecoPoints: [totalPoints]</Text>
          <View style={styles.button}>
            <Button title="Travel" onPress={() => this.props.navigation.navigate('Travel')} />
          </View>
          <View style={styles.button}>
            <Button title="Appliances" onPress={() => this.props.navigation.navigate('Appliances')} />
          </View>
          <View style={styles.button}>
            <Button title="Climate" onPress={() => this.props.navigation.navigate('Climate')} />
          </View>
          <View style={styles.button}>
            <Button title="Buy Offsets" onPress={() => this.props.navigation.navigate('Offset')} />
          </View>
          <View style={styles.button}>
            <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
          </View>
      </View >
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

