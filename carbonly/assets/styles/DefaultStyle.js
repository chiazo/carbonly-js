import {StyleSheet} from 'react-native';

const colors = {
    back: '#161515',
    pri: '#247ba0',
    priAlt: '#006494',
    sec: '#006494',
    secAlt: '#00a878',
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
    optionIconContainer: {
      marginRight: 9,
    },
    option: {
      backgroundColor: colors.back,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
    },
  });