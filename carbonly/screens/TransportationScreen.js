import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TransportationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitleText}>Overall Averages</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
        <Text style={styles.optionsTitleText}>Weekly History</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
        <Text style={styles.optionsTitleText}>An Average American</Text>
          <Text style={styles.optionsSubTitleText}>Travel</Text>
      </View>
    );
  }
}

TransportationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    color: '#00abff',
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionsSubTitleText: {
    fontSize: 14,
    color: '#005eff',
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
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
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

