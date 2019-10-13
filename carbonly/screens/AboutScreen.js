import React from 'react';
import {
  Image,
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native';

import styles from '../assets/styles/DefaultStyle';
import logo from '../assets/images/logo.png';
import colors from '../assets/styles/Colors';

export default class AboutScreen extends React.Component {


  static navigationOptions = {
    title: 'About',
    headerStyle: styles.headerBar,
    headerTintColor: colors.contrast,
    headerTitleStyle: styles.headerTitle,
  };

    render() {
      return (
        <ScrollView style={styles.scrollColorFix}>
        <View style={styles.centerContainer}>
          <Image source={logo} style={styles.headerImage}/>
          <Text style={styles.headerText}>The Issue</Text>
          <Text style={styles.baseText}>Anthropogenic climate change is the biggest issue of our time, but products and processes that emit these dreaded "greenhouse gases" are integral parts of our daily lives. As average citizens of the world, it feels like it's impossible to make any visible impact, and all we can do is wait for big tech companies and governmental agencies to come up with technologies and policies that force us to live more sustainable lives.</Text>
          <Text style={styles.headerText}>Our Solution</Text>
          <Text style={styles.baseText}>With Carbonly, you can work within our market-based world economy to *buy* carbon offsets. Tracking your sustainable activities, Carbonly rewards you with ecoPoints, which can be used to donate to social and environmental justice projects around the world! Now, not only can you make a quantifiable impact on climate change, you can *see* the worldwide results of your efforts! Each project is updated regularly with its completion status.</Text>
          <Text style={styles.headerText}>How it Works</Text>
          <Text style={styles.baseText}>Carbonly tracks your movement throughout the day using your phone's geolocation services. Any time you travel more than 0.1 miles in a single movement period, you are sent a push notification to ask whether you walked, biked, bused, drove, or flew. For choosing sustainable options, like walking, biking, and busing, you are reward ecoPoints for reducing your carbon footprint.</Text>
          <Text style={styles.baseText}>Additionally, using a SmartHome API, Carbonly is able to track your appliance usage throughout the day. Comparing your electricity and heat usage to your personal history and the average American, you are rewarded ecoPoints for reducing your consumption.</Text>
          <Text style={styles.baseText}>Finally, using your phone to measure air temperature and comparing it to the outside temperature of your geolocation, Carbonly rewards you with points for utilizing HVAC systems in a sustainable fashion.</Text>
          <Text style={styles.headerText}>CO2e and ecoPoints</Text>
          <Text style={styles.baseText}>Each ecoPoint is worth approximately one cent, with carbon offsets generally being worth between $3.50 and $12 per tonne of CO2e. Partnering with the nonprofit Cool Effect, an organization that finds and monitors carbon offset projects around the world, we are able to use donations from sponsors to match your point donation to a monetary donation.</Text>
          <Text style={styles.baseText}>So... what exactly is CO2e? CO2e is short for Carbon Dioxide equivalent, which is the worldwide standard for measurement of greenhouse gas emissions. For example, an emission of 1 kilogram of carbon dioxide is 1 kgCO2e, whereas an emission of 1 kilogram of methane is 25 kgCO2e. This is because, over a century's time period, methane has a 25x worse effect on the world climate than carbon dioxide does.</Text>
        </View >
        </ScrollView>
      );
    }
  }
  
