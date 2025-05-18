const caesarCipher = (string, shift) => {
  let cipheredString = ""

  for (const char of string) {
    const code = char.charCodeAt()
    const shiftedCode = code + shift
    cipheredString += String.fromCharCode(shiftedCode)
  }

  return cipheredString
}

module.exports = caesarCipher
