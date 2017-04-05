// import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Profile from './profile';
// import DrawerContent from '../components/DrawerContent';

const Authorized = DrawerNavigator({
  Profile: { screen: Profile },
});

export default Authorized;
