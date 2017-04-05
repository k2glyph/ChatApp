import { connect } from 'react-redux';
import { loginSuccess } from '@redux/auth/actions';
import LoginView from './loginview';

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    logged: state.auth.loggedIn,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { loginSuccess })(LoginView);
