const caesarCipher = (string, shift) => {
  const code = string.charCodeAt()
  const shiftedCode = code + shift
  const cipheredString = String.fromCharCode(shiftedCode)
  return cipheredString
}

module.exports = caesarCipher
