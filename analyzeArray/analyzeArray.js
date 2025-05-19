const analyzeArray = (arr) => {
  const average = arr.reduce((prev, curr) => (prev += curr)) / arr.length
  const min = Math.min(...arr)

  return { average, min }
}

module.exports = analyzeArray
