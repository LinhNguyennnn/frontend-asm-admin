import * as type from "../constants/actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  if (action.type === type.GET_USER_LOGIN) {
    return state = action.user;
  }
  return state;
}