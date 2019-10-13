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
        <View style={styles.container}>
            <Button title="Offsets Options" onPress={() => this.props.navigation.navigate('Offsets')}/>
            <Text style={styles.optionsTitleText}>Purchase Confirmation</Text>
            <Text style={styles.optionCenteredText}>You may purchase this offset in 50-point increments.</Text>
            <Text style={styles.optionCenteredText}>Each increment results in a 70-kilogram carbon offset being bought.</Text>
            <Button title="Purchase 70 kilograms of carbon offset." onPress={() => {
                this.props.navigation.navigate('');
                alert("Congrats! You have purchased 70 kilograms of carbon offset, supporting the forests of Western Oaxaca, Mexico.");
            }}></Button>
        </View>
    );
  }
}

PurchaseConfirmationScreen.navigationOptions = {
        header: null,
};