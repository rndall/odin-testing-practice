const analyzeArray = (arr) => {
  const average = arr.reduce((prev, curr) => (prev += curr)) / arr.length

  return { average }
}

module.exports = analyzeArray
