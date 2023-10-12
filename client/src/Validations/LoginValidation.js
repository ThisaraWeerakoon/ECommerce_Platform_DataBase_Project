import React from 'react';

export function LoginValidation(email, password) {

  const errors = {
    email: [],
    password: [],
  };

  const email_pat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
  
  // Check if the Email is an Empty string or not.
  if (email === "") {
    errors.email.push('Email Address can not be empty');
  }

  // Check if the Email pattern matches.
  else if (!email_pat.test(email)) {
    errors.email.push('Email invalid');
  }

  
  // check if the password follows constraints or not.
  if (password === "") {
    errors.password.push('Password can not be empty');
  }

  return errors;
}


