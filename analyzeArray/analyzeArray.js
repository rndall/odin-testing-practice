const analyzeArray = (arr) => {
  const average = arr.reduce((prev, curr) => (prev += curr)) / arr.length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max }
}

module.exports = analyzeArray
