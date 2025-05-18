describe("calculator", () => {
  test("is defined", () => {
    expect(require("./calculator")).toBeDefined()
  })

  const calculator = require("./calculator")

  test("add function is defined", () => expect(calculator.add).toBeDefined())
  test("subtract function is defined", () =>
    expect(calculator.subtract).toBeDefined())
  test("multiply function is defined", () =>
    expect(calculator.multiply).toBeDefined())
  test("divide function is defined", () =>
    expect(calculator.divide).toBeDefined())

  test("two plus two is four", () => expect(calculator.add(2, 2)).toBe(4))
  test("one plus two is three", () => expect(calculator.add(1, 2)).toBe(3))
})
