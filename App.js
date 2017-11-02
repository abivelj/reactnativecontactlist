import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar, View } from 'react-native';
import ContactHome from './screens/ContactHome';
import ContactDetails from './screens/ContactDetails';

export default class App extends React.Component {
  constructor() {
    super();
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <ScreenNavigator />
    );
  }
}

const ScreenNavigator = StackNavigator({
  Home: { screen: ContactHome },
  Details: { screen: ContactDetails },
})
