import {StyleSheet} from 'react-native';

const colors = {
    back: '#161515',   // Black
    pri: '#403f3f',    // Gray
    accent: '#2975f4', // Blue
    accentAlt: '#1e56b2',    // Darker Blue
    secAccent: '#1bc181', // Pine Green
  };


export default StyleSheet.create({
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.back,
      padding: 20,
    },
    headerText: {
      fontSize: 32,
      color: colors.pri,
      margin: 20,
    },
    baseText: {
      fontSize: 20,
      color: colors.pri,
      margin: 12,
    },
    headerImage: {
      resizeMode: 'center',
    },
    button: {
      padding: 10,
    }
  });