const ns = `WORKLOB`;

export default {
  REGISTER_REQUEST: `${ns}_USERS_REGISTER_REQUEST`,
  REGISTER_SUCCESS: `${ns}_USERS_REGISTER_SUCCESS`,
  REGISTER_FAILURE: `${ns}_USERS_REGISTER_FAILURE`,

  LOGIN_REQUEST: `${ns}_USERS_LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${ns}_USERS_LOGIN_SUCCESS`,
  LOGIN_FAILURE: `${ns}_USERS_LOGIN_FAILURE`,

  RESET_PASSWORD_REQUEST: `${ns}_USERS_RESET_PASSWORD_REQUEST`,
  RESET_PASSWORD_SUCCESS: `${ns}_USERS_RESET_PASSWORD_SUCCESS`,
  RESET_PASSWORD_FAILURE: `${ns}_USERS_RESET_PASSWORD_FAILURE`,

  CHECK_EMAIL_EXIST_REQUEST: `${ns}_USERS_CHECK_EMAIL_EXIST_REQUEST`,
  CHECK_EMAIL_EXIST_SUCCESS: `${ns}_USERS_CHECK_EMAIL_EXIST_SUCCESS`,
  CHECK_EMAIL_EXIST_FAILURE: `${ns}_USERS_CHECK_EMAIL_EXIST_FAILURE`,

  LOGOUT: `${ns}_USERS_LOGOUT`,

  DELETE_REQUEST: `${ns}_USERS_DELETE_REQUEST`,
  DELETE_SUCCESS: `${ns}_USERS_DELETE_SUCCESS`,
  DELETE_FAILURE: `${ns}_USERS_DELETE_FAILURE`,

  VERIFY_USER_REQUEST: `${ns}_USERS_VERIFY_USER_REQUEST`,
  VERIFY_USER_SUCCESS: `${ns}_USERS_VERIFY_USER_SUCCESS`,
  VERIFY_USER_FAILURE: `${ns}_USERS_VERIFY_USER_FAILURE`,

  RESET_STATE: `${ns}_RESET_STATE`,

  UPDATE_STATE: `${ns}_UPDATE_STATE`,

  GET_USER_REQUEST: `${ns}_USERS_GET_USER_REQUEST`,
  GET_USER_SUCCESS: `${ns}_USERS_GET_USER_SUCCESS`,
  GET_USER_FAILURE: `${ns}_USERS_GET_USER_FAILURE`,
};
