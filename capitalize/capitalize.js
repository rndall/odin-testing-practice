function capitalize(string) {
  const words = string.split(" ")
  const upper = words.map((word) => {
    if (!word) return
    return word[0].toUpperCase() + word.slice(1)
  })
  return upper.join(" ")
}

module.exports = capitalize
