function greet (name) {
  if(Array.isArray(name)){
    return 'Hello, ' + name[0] + ' and ' + name[1] + '.';
  }
  if (!name  || name === ' ') return 'Hello, my friend.';
  if (name === name.toUpperCase()) return 'HELLO, ' + name + '.';
  return 'Hello, ' + name + '.';
};


module.exports = greet
