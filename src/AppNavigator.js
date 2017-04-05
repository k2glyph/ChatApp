import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Root from '@navigations/root';

class AppNavigator extends Component { //eslint-disable-line
  render() {
    return (
      <Root
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => { //eslint-disable-line
  return { nav: state.nav };
};

export default connect(mapStateToProps)(AppNavigator);
