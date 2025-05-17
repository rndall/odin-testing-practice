const capitalize = require("./capitalize")

test("capitalize a to A", () => expect(capitalize("a")).toBe("A"))
test("capitalize ab to Ab", () => expect(capitalize("ab")).toBe("Ab"))
test("spaced: capitalize a b to A B", () =>
  expect(capitalize("a b")).toBe("A B"))
test("capitalize a  b to A  B", () => expect(capitalize("a  b")).toBe("A  B"))
test("number: capitalize 123 to 123", () =>
  expect(capitalize("123")).toBe("123"))
test("capitalize 23a  x Ar3 to 23a  X Ar3", () =>
  expect(capitalize("23a  x Ar3")).toBe("23a  X Ar3"))
