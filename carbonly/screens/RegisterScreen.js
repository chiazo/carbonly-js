import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';
import logo from '../assets/images/logo.png';

export default class RegisterScreen extends React.Component {

  static navigationOptions = {
    title: 'Register an Account',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.headerImage} />
        <Text style={styles.baseText}>Username:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.baseText}>Password:</Text>
        <TextInput style={styles.input}/>

        <Button title="Register" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}
