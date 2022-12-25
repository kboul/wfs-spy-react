import splitStrOnUpperCase from ".";

test("splits input string on upper case letter", () => {
  const splittedString = splitStrOnUpperCase("ElectronicMailAddress");
  expect(splittedString).toBe("Electronic Mail Address");
});
