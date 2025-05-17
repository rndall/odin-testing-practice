const capitalize = require("./capitalize")

test("capitalize a to A", () => expect(capitalize("a")).toBe("A"))
test("capitalize ab to Ab", () => expect(capitalize("ab")).toBe("Ab"))
test("spaced: capitalize a b to A B", () =>
  expect(capitalize("a b")).toBe("A B"))
test("capitalize a  b to A  B", () => expect(capitalize("a  b")).toBe("A  B"))
test("number: capitalize 123 to 123", () =>
  expect(capitalize("123")).toBe("123"))
