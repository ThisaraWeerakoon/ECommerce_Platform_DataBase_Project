import React from 'react';

export function SignUpValidation(email, newPassword, confirmPassword, phoneNumber, firstName, lastName) {
      
      let error = {}
      const email_pat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/
      const password_pat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

      // Check if the Email is an Empty string or not.
      if (email === "") {
        error.email = 'Email Address can not be empty'
      }
      
      // Check if the Email pattern match.
      if(!email_pat.test(email)){
        error.email = "Email invalid"
      }
  
      // check if the newPassword is empty or not.
      if (newPassword === "") {
        error.newPassword = 'Password can not be empty'
      }
  
      // if newPassword length is less than 8 characters, alert invalid form.
      if (newPassword.length < 8) {
        error.newPassword = 'Password must contain greater than or equal to 8 characters.'
      }

      // check if the newPassword follows constraints or not.
      if(!password_pat.test(newPassword)){
        error.newPassword = "Password is not strong enough."
      }

      // check if new password and the confirmation are matching.
      if (confirmPassword != newPassword) {
        error.confirmPassword = "Confirmed password doesn't match new password"
      }
      
      // Check if the Email is an Empty string or not.
      if (firstName === "") {
        error.firstName = "First name cannot be empty. "
      }

      // Check if the Email is an Empty string or not.
      if (lastName === "") {
        error.lastName = 'Last name can not be empty'
      }

      // Check if the Email is an Empty string or not.
      if (phoneNumber === "") {
        error.phoneNumber = 'Phone number can not be empty'
      }
      // if all the conditions are valid, this means that the form is valid
      return error;
    }


