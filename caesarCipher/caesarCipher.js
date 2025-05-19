const isAlpha = (char) => /^[a-zA-Z]+$/.test(char)

const caesarCipher = (string, shift) => {
  let cipheredString = ""

  for (const char of string) {
    if (!isAlpha(char)) {
      cipheredString += char
      continue
    }

    const code = char.charCodeAt()
    let shiftedCode = code + shift
    if (shiftedCode >= 123) shiftedCode -= 26
    cipheredString += String.fromCharCode(shiftedCode)
  }

  return cipheredString
}

module.exports = caesarCipher
