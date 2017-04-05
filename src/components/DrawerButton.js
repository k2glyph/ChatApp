import React, { PropTypes } from 'react';
import { TouchableOpacity, Image } from 'react-native';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};
const DrawerButton = (navigation) => { //eslint-disable-line
  return (
    <TouchableOpacity onPress={() => navigation.navigation.navigate('DrawerOpen')}>
      <Image source={require('@img/icons/menu.png')} style={{ width: 32, height: 32 }} />
    </TouchableOpacity >
  );
};

DrawerButton.propTypes = propTypes;
export { DrawerButton }; //eslint-disable-line
