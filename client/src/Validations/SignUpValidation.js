import React from 'react';

export function SignUpValidation(email, newPassword, confirmPassword, phoneNumber, firstName, lastName) {
    const errors = {
      email: [],
      newPassword: [],
      confirmPassword: [],
      phoneNumber: [],
      firstName: [],
      lastName: [],
    };
  
    const email_pat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
    const password_pat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    // Check if the Email is an Empty string or not.
    if (email === "") {
      errors.email.push('Email Address can not be empty');
    }
  
    // Check if the Email pattern matches.
    else if (!email_pat.test(email)) {
      errors.email.push('Email invalid');
    }
  
    // Check if newPassword is empty or not.
    if (newPassword === "") {
      errors.newPassword.push('Password can not be empty');
    }
  
    // If newPassword length is less than 8 characters, add an error.
    else if (newPassword.length < 8) {
      errors.newPassword.push('Password must contain 8 or more characters.');
    }
  
    // Check if newPassword follows constraints or not.
    else if (!password_pat.test(newPassword)) {
      errors.newPassword.push('Password is not strong enough.');
    }
  
    // Check if newPassword and the confirmation match.
    if (confirmPassword !== newPassword) {
      errors.confirmPassword.push("Confirmed password doesn't match new password");
    }
  
    // Check if the First Name is an Empty string or not.
    if (firstName === "") {
      errors.firstName.push('First name cannot be empty');
    }
  
    // Check if the Last Name is an Empty string or not.
    if (lastName === "") {
      errors.lastName.push('Last name can not be empty');
    }
  
    // Check if the Phone Number is an Empty string or not.
    if (phoneNumber === "") {
      errors.phoneNumber.push('Phone number can not be empty');
    }
  
    return errors;
  }
  