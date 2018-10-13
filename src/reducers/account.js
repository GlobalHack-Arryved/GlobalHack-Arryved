
import { createReducer } from 'redux-act';
import { setLoggedIn, setUserInfo } from '../actions/account';

export default createReducer({
  [setLoggedIn]: (state, isLoggedIn) => ({ ...state, isLoggedIn, isLoading: false }),
  [setUserInfo]: (state, userInfo) => ({ ...state, userInfo })
}, {
  isLoading: true,
  isLoggedIn: false,
  userInfo: null
});
