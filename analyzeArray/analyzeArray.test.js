const analyzeArray = require("./analyzeArray")

describe("analyzeArray", () => {
  test("return average, min, max, and length of given array", () => {
    let array = [1, 8, 3, 4, 2, 6]
    let result = analyzeArray(array)

    expect(result.average).toBe(4)

    delete result.average
    expect(result).toEqual({ min: 1, max: 8, length: 6 })

    array = [5, 5, 9, 7, 1, 2, 29]

    result = analyzeArray(array)
    expect(result.average).toBeCloseTo(8.2857)

    delete result.average
    expect(result).toEqual({ min: 1, max: 29, length: 7 })
  })
})
