function greet (name) {
  if (!name || name === undefined || name === ' ') return 'Hello, my friend.'
  return 'Hello, ' + name + '.'
}
module.exports = greet
