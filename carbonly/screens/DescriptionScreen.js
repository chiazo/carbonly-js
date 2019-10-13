import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class DescriptionScreen extends React.Component {

    render() {
      return (
        <ScrollView style={styles.scrollColorFix}>
        <View style={styles.centerContainer}>
            <Text style={styles.headerText}>[FullName]</Text>
                <Text style={styles.baseText}>[Description]</Text>
                
                <Text style={styles.baseText}>Supporting this project costs [points per tonne] ecoPoints per tonne of CO2e.</Text>
                <Button title="Support this Project!" onPress={() => this.props.navigation.navigate('Purchase')}/>
        </View>
        </ScrollView>
    );
  }
}

DescriptionScreen.navigationOptions = {
  title: 'Offset Option',
};