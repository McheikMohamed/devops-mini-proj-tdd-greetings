function greet (name) {
  if (!name || name === undefined || name === ' ') return 'Hello, my friend.'
  if (name === name.toUpperCase()) return 'HELLO, ' + name + '.'
  return 'Hello, ' + name + '.'
}
module.exports = greet
