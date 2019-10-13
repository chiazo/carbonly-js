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

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Login',
        headerStyle: styles.headerBar,
        headerTintColor: colors.contrast,
        headerTitleStyle: styles.headerTitle,
    };

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
