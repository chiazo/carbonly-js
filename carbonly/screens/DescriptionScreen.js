import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class DescriptionScreen extends React.Component {

    render() {
      return (
<<<<<<< HEAD
        <View style={styles.container, styles.textHierContainer}>
            <Button title="Offsets Options" onPress={() => this.props.navigation.navigate('Offsets')}/>
            <Text style={styles.headerText}>Save Forests in Western Oaxaca, Mexico</Text>
                <Text>Mexico’s 65 million hectares of forest are disappearing at the rate of 1 million hectares a year. This project aims to mitigate environmental impacts caused by forest exploitation; restore areas with severe erosion or those affected by disease, fire, and pests; and to protect and prevent damage by fires, grazing, and illegal use of forest resources. The project is managed by a community of landowners who have pooled their resources.</Text>
                <Text></Text>
                <Text>Supporting this project costs 714 points per tonne of CO2e.</Text>
=======
        <View style={styles.centerContainer}>
            <Button title="Offsets Options" onPress={() => this.props.navigation.navigate('Offsets')}/>
            <Text style={styles.headerText}>Save Forests in Western Oaxaca, Mexico</Text>
                <Text style={styles.baseText}>Mexico’s 65 million hectares of forest are disappearing at the rate of 1 million hectares a year. This project aims to mitigate environmental impacts caused by forest exploitation; restore areas with severe erosion or those affected by disease, fire, and pests; and to protect and prevent damage by fires, grazing, and illegal use of forest resources. The project is managed by a community of landowners who have pooled their resources.</Text>
                <Text style={styles.baseText}></Text>
                <Text style={styles.baseText}>Supporting this project costs 714 points per tonne of CO2e.</Text>
>>>>>>> d99175ea8eeb5b9001052ef900983f994e95207b
                <Button title="support this Project!" onPress={() => this.props.navigation.navigate('Purchase')}/>
        </View>
    );
  }
}

DescriptionScreen.navigationOptions = {
  title: 'Description',
};