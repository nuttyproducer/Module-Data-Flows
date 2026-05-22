let verify = require("./password-verifier");

test("A password less than 8 characters is rejected", () => {
  expect(verify("Abcdef1")).toEqual("Password Rejected");
});

test("accepts password with 8 or more characters", () => {
  expect(verify("Abcdefg1")).toEqual("Password accepted");
});

test("rejects null password", () => {
  expect(verify(null)).toEqual("Password rejected");
});

test("rejects password with no uppercase letter", () => {
  expect(verify("abcdefg1")).toEqual("Password rejected");
});

test("rejects password with no number", () => {
  expect(verify("Abcdefgh")).toEqual("Password rejected");
});

test("accepts a valid password", () => {
  expect(verify("Abcdefg1")).toEqual("Password accepted");
});
