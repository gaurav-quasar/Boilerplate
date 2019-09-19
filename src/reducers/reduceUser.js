import initialState from 'initialState';
// import * as ActionTypes from 'action_types';

const reduceUser = (state = initialState.user, action) => {
  switch (action.type) {
    // case ActionTypes.SAMPLE_ACTION:
    //   return handle_sample(state, action);
    default:
      return state;
  }
};

export default reduceUser;
