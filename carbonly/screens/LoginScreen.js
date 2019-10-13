import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import styles from '../assets/styles/DefaultStyle';
import colors from '../assets/styles/Colors';
import logo from '../assets/images/logo.png';
import { AsyncStorage } from "react-native";



export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Login',
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
        const { user, pass }  = this.state ;

        fetch('https://dioxidely-data-beta.herokuapp.com/login', { 
            method: 'POST',
            data: {
              email: user,
              password: pass
            }
          })
          .then((response) => {
              _storeData = async () => {
                  try{
                      await AsyncStorage.setItem("token", response.json())
                  } catch (error) {

                  }
              }
          }).then(function(body) {
            console.log(body);
          }).catch((error) => {
            console.error("There was an error registering.");
          });
    }

    render() {
        return (
            <View style={styles.centerContainer}>
                <Image source={logo} style={styles.headerImage} />
                <Text style={styles.baseText}>Username:</Text>
                <Text style={styles.baseText}>Password:</Text>
                <View style={styles.button}>
                    <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
                </View>
                <View style={styles.button}>
                    <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
                </View>
            </View>
        );
    }
}
