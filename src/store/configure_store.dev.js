// Library imports
import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

// Project imports
import RootReducer from 'reducerRoot';

export default function configureStore(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // Redux middleware that allows you to write action creators that return a function instead of an action
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  const store = createStore(
    RootReducer,
    initialState,
    compose(
      // it is optional to pass in initial state when an instance of the store is created
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f, // add support for Redux dev tools
    ),
  );

  // if (module.hot) module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));

  return store;
}
