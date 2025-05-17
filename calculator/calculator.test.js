describe("calculator", () => {
  test("is defined", () => {
    expect(require("./calculator")).toBeDefined()
  })

  const calculator = require("./calculator")

  test("add function is defined", () => expect(calculator.add).toBeDefined())
})
