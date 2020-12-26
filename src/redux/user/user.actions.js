import UserService from "../../services/user";
import { loginTypes } from "./user.types";

// Login user action
export const loginUser = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: loginTypes.USER_LOGIN_BEGIN,
    });
    const { data } = UserService.login(payload);
    dispatch({ type: loginTypes.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: loginTypes.USER_LOGIN_ERROR, payload: error.message });
  }
};

// Register user action
export const registerUser = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: loginTypes.USER_LOGIN_BEGIN,
    });
    const { data } = UserService.register(payload);
    dispatch({ type: loginTypes.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: loginTypes.USER_LOGIN_ERROR, payload: error.message });
  }
};
