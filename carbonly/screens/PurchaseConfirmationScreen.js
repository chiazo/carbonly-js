import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';

export default class PurchaseConfirmationScreen extends React.Component {

  static navigationOptions = {
    title: 'Purchase Confirmation',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

    render() {
      return (
        <View style={styles.centerContainer}>
            <Text style={styles.headerText}>Confirm Purchase?</Text>
            <Text style={styles.baseText}>You may purchase this offset in 50-point increments.</Text>
            <Text style={styles.baseText}>Each increment results in a 70-kilogram carbon offset being bought.</Text>
            <Button title="Purchase 70 kilograms of carbon offset." onPress={() => {
                this.props.navigation.navigate('');
                alert("Congrats! You have purchased 70 kilograms of carbon offset, supporting your chosen project and fighting climate change!");
            }}></Button>
        </View>
    );
  }
}
