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
  });