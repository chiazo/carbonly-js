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
        </View>
    );
  }
}