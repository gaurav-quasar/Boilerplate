import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import ReduceUser from 'reduceUser';

export default reduceReducers(
  combineReducers({
    // common: combineReducers({
    //   sampleNode: reduce_sample_node,
    // }),
    user: ReduceUser
  })
);
