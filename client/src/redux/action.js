export const login = (dispatch, payload) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: "LOGIN",
        payload
      });
      resolve();
    });
  };
export const logout = (dispatch, payload) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: "LOGOUT",
        payload
      });
      resolve();
    });
  };