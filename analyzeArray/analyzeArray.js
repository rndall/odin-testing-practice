const analyzeArray = (arr) => {
  const length = arr.length
  const average = arr.reduce((prev, curr) => (prev += curr)) / length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max, length }
}

module.exports = analyzeArray
