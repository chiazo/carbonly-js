import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class DescriptionScreen extends React.Component {
    navigationOptions = {
        header: null,
        title: 'Offset Options',
    };

    render() {
      return (
        <View style={styles.container}>
            <Button title="Offsets Options" onPress={() => this.props.navigation.navigate('Offsets')}/>
            <Text style={styles.optionsTitleText}>Save Forests in Western Oaxaca, Mexico</Text>
                <Text style={styles.optionCenteredText}>Mexico’s 65 million hectares of forest are disappearing at the rate of 1 million hectares a year. This project aims to mitigate environmental impacts caused by forest exploitation; restore areas with severe erosion or those affected by disease, fire, and pests; and to protect and prevent damage by fires, grazing, and illegal use of forest resources. The project is managed by a community of landowners who have pooled their resources.</Text>
                <Text style={styles.optionCenteredText}></Text>
                <Text style={styles.optionCenteredText}>Supporting this project costs 714 points per tonne of CO2e.</Text>
                <Button title="support this Project!" onPress={() => this.props.navigation.navigate('Purchase')}/>
        </View>
    );
  }
}