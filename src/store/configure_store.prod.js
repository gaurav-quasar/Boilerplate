import * as Redux from 'redux';
import * as Thunk from 'redux-thunk';

import RootReducer from 'reducerRoot';

export default function configureStore(initialState) {
  return Redux.createStore(RootReducer, initialState, Redux.applyMiddleware(Thunk.default));
}
