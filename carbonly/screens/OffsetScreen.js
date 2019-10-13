import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';

export default class OffsetScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        <Text style={styles.optionsTitleText}>Your Points: </Text>
          <Button title="Save Forests in Western Oaxaca, Mexico. (714 points per tonne of CO2e)" onPress={() => {
            this.props.navigation.navigate('HomeScreen');
            alert("Mexico’s 65 million hectares of forest are disappearing at the rate of 1 million hectares a year. This project aims to mitigate environmental impacts caused by forest exploitation; restore areas with severe erosion or those affected by disease, fire, and pests; and to protect and prevent damage by fires, grazing, and illegal use of forest resources. The project is managed by a community of landowners who have pooled their resources.");
            }}/>
          <Button title="Support the Protection of Endangered Orangutans. (659 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
          <Button title="Protect the Alto Mayo Peruvian Forest. (879 points per tonne of CO2e)" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
      </View>
    );
  }
}

OffsetScreen.navigationOptions = {
  header: null,
};
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#b0e9ff',
  },
  optionsTitleText: {
    fontSize: 20,
    color: '#00abff',
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionsSubTitleText: {
    fontSize: 18,
    color: '#005eff',
    marginLeft: 20,
    marginTop: 9,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#00d2ff",
    marginLeft: 25,
    marginTop: 3,
    marginBottom: 4,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
});
=======
>>>>>>> e83c53ac7f75b831ba4930cd40b08d6b3c1bde62
