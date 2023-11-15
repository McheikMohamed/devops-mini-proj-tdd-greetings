function greet (name) {
  if(Array.isArray(name)){
    if(name.length >2){
      let retour ='Hello';
      for(let i =0;i<name.length-1;i++){
        retour += ', ' + name[i];
      }
      retour += ' and ' + name[name.length-1] + '.';
      console.log(retour);
      return retour;
    }
    return 'Hello, ' + name[0] + ' and ' + name[1] + '.';
  }
  if (!name  || name === ' ') return 'Hello, my friend.';
  if (name === name.toUpperCase()) return 'HELLO, ' + name + '.';
  return 'Hello, ' + name + '.';
};


module.exports = greet
