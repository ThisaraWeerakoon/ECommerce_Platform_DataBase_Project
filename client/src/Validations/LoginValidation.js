import React from 'react';

export function LoginValidation(email, password) {

  let error = {}
  // Check if the Email is an Empty string or not.
  if (email.length === 0) {
    error.email = 'Email Address can not be empty'
  }
  
  // check if the password follows constraints or not.
  if (password.length === 0) {
    error.password = 'Password can not be empty'
  }

  return error;
}


