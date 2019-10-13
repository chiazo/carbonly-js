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
            <Text style={styles.baseText}>Each increment results in a [50 points / points per tonne, converted to kilograms]-kilogram carbon offset being bought.</Text>
            <Button title="Purchase [50 points / points per tonne, converted to kilograms] kilograms of carbon offset." onPress={() => {
                this.props.navigation.navigate('');
                alert("Congrats! You have purchased [50 points / points per tonne, converted to kilograms] kilograms of carbon offset, supporting your chosen project and fighting climate change!");
            }}></Button>
        </View>
    );
  }
}

PurchaseConfirmationScreen.navigationOptions = {
  title: 'Purchase Confirmation',
};