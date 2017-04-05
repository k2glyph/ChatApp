import { combineReducers } from 'redux';

import Auth from '@redux/auth';
import Navigation from '@redux/navigation';
// Combine all
export default combineReducers({
  auth: Auth,
  nav: Navigation,
});
