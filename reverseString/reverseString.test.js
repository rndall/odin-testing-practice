const reverseString = require("./reverseString")

test("reverse ab to ba", () => expect(reverseString("ab")).toBe("ba"))
test("reverse abc to cba", () => expect(reverseString("abc")).toBe("cba"))
test("reverse abcd to dcba", () => expect(reverseString("abcd")).toBe("dcba"))
test("reverse K2aR to Ra2K", () => expect(reverseString("K2aR")).toBe("Ra2K"))
