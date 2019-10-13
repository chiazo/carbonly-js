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
        
        <Button title="Travel" onPress={() => this.props.navigation.navigate('Travel')}/>
        <Button title="Appliances" onPress={() => this.props.navigation.navigate('Appliances')}/>
        <Button title="Climate" onPress={() => this.props.navigation.navigate('Climate')}/>
        <Button title="Buy Offsets" onPress={() => this.props.navigation.navigate('Offset')}/>
        
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

