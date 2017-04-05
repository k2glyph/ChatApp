import Root from '@navigations/root';

export default (state, action) => {
  const newState = Root.router.getStateForAction(action, state);
  return newState || state;
};
