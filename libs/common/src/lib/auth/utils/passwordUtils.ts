export const highlightPassword = (password: string) => {
  const numRegex = /\d/;
  const lowCase = /[a-z]/;
  const upCase = /[A-Z]/;
  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  //Contains number
  const passwordHint = {
    len: false,
    lowCase: false,
    specialChar: false,
    upCase: false,
    number: false,
  };
  if (numRegex.test(password)) {
    passwordHint.number = true;
  } else {
    passwordHint.number = false;
  }

  //Contains Lowercase
  if (lowCase.test(password)) {
    passwordHint.lowCase = true;
  } else {
    passwordHint.lowCase = false;
  }

  //Contains Uppercase
  if (upCase.test(password)) {
    passwordHint.upCase = true;
  } else {
    passwordHint.upCase = false;
  }

  //Contains special chars
  if (specialChar.test(password)) {
    passwordHint.specialChar = true;
  } else {
    passwordHint.specialChar = false;
  }

  //Contains min 8 chars
  if (password.length >= 8) {
    passwordHint.len = true;
  } else {
    passwordHint.len = false;
  }

  return passwordHint;
};
