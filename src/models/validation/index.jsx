function passwordValidation(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return { valid: false, text: 'The password needs to be at least 6 characters long, have at least one uppercase letter and one number.' };
  } else {
    return { valid: true, text: '' };
  }
}

function passwordCheck(password, passwordCheck) {
  if (password !== passwordCheck) {
    return { valid: false, text: "Passwords don't match!" };
  } else {
    return { valid: true, text: '' };
  }
}

function emailValidation(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, text: 'Please type a valid email address.' };
  } else {
    return { valid: true, text: '' };
  }
}

export { passwordValidation, passwordCheck, emailValidation };
