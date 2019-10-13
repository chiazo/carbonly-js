import {StyleSheet} from 'react-native';

const colors = {
    back: '#161515',   // Black
    pri: '#403f3f',    // Gray
    accent: '#2975f4', // Blue
    accentAlt: '#1e56b2',    // Darker Blue
    secAccent: '#1bc181', // Pine Green
  };


export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: colors.back,
      alignItems: 'center',
    },
    headerImage: {
      resizeMode: 'center',
    },
    optionsTitleText: {
      fontSize: 20,
      color: colors.pri,
      marginTop: 9,
      marginBottom: 12,
      textAlign: 'center',
    },
    optionsSubTitleText: {
      fontSize: 18,
      color: colors.priAlt,
      marginLeft: 20,
      marginTop: 9,
      marginBottom: 12,
    },
    optionText: {
      fontSize: 16,
      color: colors.pri,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 3,
      marginBottom: 4,
    },
    optionCenteredText: {
      fontSize: 16,
      color: colors.pri,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 3,
      marginBottom: 4,
      textAlign: 'center',
    },
  });