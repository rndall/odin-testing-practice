const caesarCipher = require("./caesarCipher")

test("cipher 'a' with 2 shift factor to 'c'", () =>
  expect(caesarCipher("a", 2)).toBe("c"))
