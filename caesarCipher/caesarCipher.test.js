const caesarCipher = require("./caesarCipher")

test("cipher 'a' with 2 shift factor to 'c'", () =>
  expect(caesarCipher("a", 2)).toBe("c"))
test("cipher 'a' with 3 shift factor to 'd'", () =>
  expect(caesarCipher("a", 3)).toBe("d"))
test("cipher 'ab' with 2 shift factor to 'cd'", () =>
  expect(caesarCipher("ab", 2)).toBe("cd"))
test("cipher 'xyz' with 3 shift factor to 'abc'", () =>
  expect(caesarCipher("xyz", 3)).toBe("abc"))
test("cipher 'HeLLo' with 3 shift factor to 'KhOOr'", () =>
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"))
test("cipher 'Hello, World!' with 3 shift factor to 'Khoor, Zruog!'", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"))
