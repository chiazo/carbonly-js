import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Carbonly
        </Text>
        <Button
          title="Transportation"
          onPress={() => this.props.navigation.navigate('Transportation')}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

