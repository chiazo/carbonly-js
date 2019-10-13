import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TravelScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        <Text style={styles.optionsTitleText}>Travel</Text>
          <Text style={styles.optionsSubTitleText}>Today</Text>
          <Text style={styles.optionsSubTitleText}>Weekly</Text>
          <Text style={styles.optionsSubTitleText}>Monthly</Text>
          <Text style={styles.optionsSubTitleText}>All-time Average</Text>
      </View>
    );
  }
}

TravelScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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

