import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class PurchaseConfirmationScreen extends React.Component {
    render() {
      return (
        <View style={styles.centerContainer}>
            <Text style={styles.headerText}>Confirm Purchase?</Text>
            <Text style={styles.baseText}>You may purchase this offset in 50-point increments.</Text>
            <Text style={styles.baseText}>Each increment results in a 70-kilogram carbon offset being bought.</Text>
            <Button title="Confirm" onPress={() => {
                this.props.navigation.navigate('');
                alert("Congrats! You have purchased 70 kilograms of carbon offset, supporting the forests of Western Oaxaca, Mexico.");
            }}></Button>
        </View>
    );
  }
}

PurchaseConfirmationScreen.navigationOptions = {
  title: 'Purchase Confirmation',
};