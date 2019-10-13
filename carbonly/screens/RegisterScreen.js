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

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      pass: {},
    };
  };

  handleSubmit = () => {
    const { user, pass } = this.state;

    console.log(user, pass);
    fetch('https://dioxidely-data-beta.herokuapp.com/register', {
      method: 'POST',
      data: {
        email: user,
        password: pass,
      },
    })
      .then(function (response) {
        return response.json()
      }).then(function (body) {
        console.log(body);
      }).catch((error) => {
        console.log("There was an error registering.");
      });
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.headerImage} />
        <Text style={styles.baseText} onSubmit>Username:</Text>
        <TextInput style={styles.input} onChangeText={user => this.setState({ user })} />
        <Text style={styles.baseText} >Password:</Text>
        <TextInput style={styles.input} onChangeText={pass => this.setState({ pass })} />
        <View style={styles.button}> 
        <Button title="Register" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}
