function greet(name) {
  if (Array.isArray(name)) {
    let string = 'Hello';
    for (let i = 0; i < name.length - 1; i++) {
      string += ', ' + name[i];
    }
    string += ' and ' + name[name.length - 1] + '.';
    return string;
  }
  if (!name || name === ' ') return 'Hello, my friend.';
  if (name === name.toUpperCase()) return 'HELLO, ' + name + '.';
  return 'Hello, ' + name + '.';
};


module.exports = greet
