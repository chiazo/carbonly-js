import {StyleSheet} from 'react-native';
import colors from './Colors'

export default StyleSheet.create({
    scrollColorFix: {
      backgroundColor: colors.back,
    },
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
    headerBar: {
      backgroundColor: colors.accent,
    },
    headerTitle: {
      fontWeight: 'bold',
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
    },
    input: {
      backgroundColor: colors.contrast,
      color: colors.sec,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
  });