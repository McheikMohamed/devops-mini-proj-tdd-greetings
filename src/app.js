function greet (name, language = 'en') {
  if (Array.isArray(name)) {
    // Lowercase/Uppercase names counter
    let upperNames = 0
    let lowerNames = 0
    for (let i = 0; i < name.length; i++) {
      if (name[i] === name[i].toUpperCase()) upperNames++
      else lowerNames++
    }

    // String that is going to end up containing lowercase names
    let retourPart1
    // String that is going to end up containing other names
    let retourPart2
    // List that only contains uppercase names
    let retourPart3

    switch (language) {
      case 'fr':
        retourPart1 = 'Bonjour'
        retourPart2 = ' ET BONJOUR'
        retourPart3 = retourPart1.toUpperCase()
        break
      case 'nl':
        retourPart1 = 'Hallo'
        retourPart2 = ' EN HALLO'
        retourPart3 = retourPart1.toUpperCase()
        break
      default:
        retourPart1 = 'Hello'
        retourPart2 = ' AND HELLO'
        retourPart3 = retourPart1.toUpperCase()
    }

    for (let i = 0, j = 0, k = 0; i < name.length; i++) {
      // UperCase names part
      if (name[i] === name[i].toUpperCase()) {
        if (upperNames === 1) {
          retourPart3 += ', ' + name[i] + '!'
          retourPart2 += ' ' + name[i] + ' !'
        } else {
          j++
          if (j === 1) {
            retourPart2 += ' ' + name[i]
            retourPart3 += ', ' + name[i]
          } else if (j === upperNames && language === 'fr') {
            retourPart2 += ' ET ' + name[i] + ' !'
            retourPart3 += ' ET ' + name[i] + ' !'
          } else if (j === upperNames && language === 'nl') {
            retourPart2 += ' EN ' + name[i] + ' !'
            retourPart3 += ' EN ' + name[i] + ' !'
          } else if (j === upperNames) {
            retourPart2 += ' AND ' + name[i] + ' !'
            retourPart3 += ' AND ' + name[i] + ' !'
          } else {
            retourPart2 += ', ' + name[i]
            retourPart3 += ', ' + name[i]
          }
        }
      } else {
        // Other case names part
        if (lowerNames === 1) retourPart1 += ', ' + name[i] + '.'
        else {
          k++
          if (k === lowerNames && language === 'fr') {
            retourPart1 += ' et ' + name[i] + '.'
          } else if (k === lowerNames && language === 'nl') {
            retourPart1 += ' en ' + name[i] + '.'
          } else if (k === lowerNames) {
            retourPart1 += ' and ' + name[i] + '.'
          } else retourPart1 += ', ' + name[i]
        }
      }
    }

    if (upperNames > 0 && lowerNames === 0) return retourPart3
    if (upperNames === 0) return retourPart1
    return retourPart1 + retourPart2
  }
  if (!name || name.trim().length === 0) {
    if (language === 'fr') return 'Bonjour, mon ami.'
    else if (language === 'nl') return 'Hallo, mijn vriend.'
    else return 'Hello, my friend.'
  }
  if (name === name.toUpperCase()) {
    if (language === 'fr') return 'BONJOUR, ' + name + '!'
    else if (language === 'nl') return 'HALLO, ' + name + '!'
    else return 'HELLO, ' + name + '!'
  }
  if (language === 'fr') return 'Bonjour, ' + name + '.'
  else if (language === 'nl') return 'Hallo, ' + name + '.'
  return 'Hello, ' + name + '.'
}

module.exports = greet
