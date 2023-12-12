function greet (name) {
  if (Array.isArray(name)) {
    let retour = 'Hello'
    for (let i = 0; i < name.length - 1; i++) {
      retour += ', ' + name[i]
    }
    retour += ' and ' + name[name.length - 1] + '.'
    return retour
  }
  if (!name || name === ' ') return 'Hello, my friend.'
  if (name === name.toUpperCase()) return 'HELLO, ' + name + '.'
  return 'Hello, ' + name + '.'
}

module.exports = greet
