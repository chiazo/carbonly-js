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
        <Text style={styles.headerText}>CO2e: </Text>
        <Text style={styles.headerText}>ecoPints: </Text>
        <View style={styles.spaceButtons}>
        <Button title="Travel" onPress={() => this.props.navigation.navigate('Travel')}/>
        <Button title="Appliances" onPress={() => this.props.navigation.navigate('Appliances')}/>
        <Button title="Climate" onPress={() => this.props.navigation.navigate('Climate')}/>
        <Button title="Buy Offsets" onPress={() => this.props.navigation.navigate('Offset')}/>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

