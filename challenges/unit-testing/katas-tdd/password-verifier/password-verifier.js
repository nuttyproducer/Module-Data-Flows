const verify = (password) => {
  // null is rejected
  if (password === null) return "Password rejected";

  // less than 8 characters is rejected
  if (password.length < 8) return "Password rejected";

  // no uppercase letter is rejected
  if (password === password.toLowerCase()) return "Password rejected";

  // no number is rejected
  if (!/\d/.test(password)) return "Password rejected";

  return "Password accepted";
};

module.exports = verify;
