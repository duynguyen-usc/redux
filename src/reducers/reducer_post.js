import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload.data); // [ post1, post2] this is what we got
      // { 4: post} this is what we want, use lodash
        return _.mapKeys(action.payload.data, 'id');
      break;
    default:
      return state;
  }
}
