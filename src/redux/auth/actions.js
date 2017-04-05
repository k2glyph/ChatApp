import { NavigationActions } from 'react-navigation';
import { LOGIN, LOGOUT } from './actiontypes';

export const loginSuccess = (user) => { //eslint-disable-line
  return (dispatch) => {
    dispatch({ type: LOGIN, payload: user });
    const resetNavigator = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Authorized',
        }),
      ],
    });
    dispatch(resetNavigator);
  };
};

export const logout = () => { //eslint-disable-line
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    const resetNavigator = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Unauthorized',
        }),
      ],
    });
    dispatch(resetNavigator);
  };
};
