var validator = require("validator");

export const isEmpty = (object) => {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(object) === JSON.stringify({});
};

export const checkRegistration = (name, email, password) => {
  let error = {};
  if (
    validator.isEmpty(name) ||
    validator.isEmpty(email) ||
    validator.isEmpty(password)
  ) {
    error.name = "All fields must be filled";
    return error;
  }
  if (!validator.isEmail(email)) {
    error.email = "Email is incorrect";
  }
  if (!validator.isByteLength(name, { min: 4, max: 20 })) {
    error.name = "Name must be between 4 and 20 characters";
  }
  if (!validator.isByteLength(password, { min: 4, max: 20 })) {
    error.password = "Password must be between 4 and 20 characters";
  }
  return error;
};

export const checkLogin = (email, password) => {
  
  let error = {};
  if (
    validator.isEmpty(email)||
    validator.isEmpty(password)
  ) {
    error.email = "All fields must be filled";
    return error;
  }
  if (!validator.isEmail(email)) {
    error.email = "Email is incorrect";
  }
  return error;
}
