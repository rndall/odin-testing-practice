const capitalize = require("./capitalize")

test("capitalize a to A", () => expect(capitalize("a")).toBe("A"))
test("capitalize ab to Ab", () => expect(capitalize("ab")).toBe("Ab"))
