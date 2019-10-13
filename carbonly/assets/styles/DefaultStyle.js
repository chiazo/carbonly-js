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
      backgroundColor: colors.back,
    },
    headerText: {
      fontSize: 32,
    },
    textHierContainer: {
      fontSize: 20,
      color: colors.pri,
      marginTop: 9,
      marginLeft: 20,
      marginBottom: 12,
      textAlign: 'center',
    },
    headerImage: {
      resizeMode: 'center',
    },
  });