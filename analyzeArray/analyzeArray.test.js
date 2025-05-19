const analyzeArray = require("./analyzeArray")

describe("analyzeArray", () => {
  test("return average, min, max, and length of given array", () => {
    let array = [1, 8, 3, 4, 2, 6]

    expect(analyzeArray(array)).toEqual({
      average: 4,
    })
  })
})
