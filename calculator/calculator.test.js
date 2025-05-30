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
  test("negative 3 plus two is negative one", () =>
    expect(calculator.add(-3, 2)).toBe(-1))

  test("two minus two is zero", () => expect(calculator.subtract(2, 2)).toBe(0))
  test("three minus two is one", () =>
    expect(calculator.subtract(3, 2)).toBe(1))
  test("three minus five is negative two", () =>
    expect(calculator.subtract(3, 5)).toBe(-2))

  test("two times two is four", () => expect(calculator.multiply(2, 2)).toBe(4))
  test("three times two is six", () =>
    expect(calculator.multiply(3, 2)).toBe(6))
  test("negtaive three times negative two is six", () =>
    expect(calculator.multiply(-3, -2)).toBe(6))

  test("two divided by two is one", () =>
    expect(calculator.divide(2, 2)).toBe(1))
  test("five divided by two is 2.5", () =>
    expect(calculator.divide(5, 2)).toBe(2.5))
  test("floating number result", () =>
    expect(calculator.divide(10, 3)).toBeCloseTo(3.3333))
  test("divide zero", () => expect(calculator.divide(0, 3)).toBe(0))
  test("divide by zero", () => expect(calculator.divide(3, 0)).toBeUndefined())
})
