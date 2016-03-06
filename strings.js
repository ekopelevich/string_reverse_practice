var word = 'apple';
var sentence = 'Apples are delicious!'

// Reverse without built-in methods and return a new string

function reverseString(string){
  var result = '';
  for (var i = string.length - 1; i >= 0 ; i--) {
    result = result + string[i];
  }
  console.log(result);
  return result;
}

reverseString(word);

// Reverse in place with buit-in methods

function reverseStringWithMethods(string){
  var string = string.split(' ').reverse().join(' ');
  console.log(string);
  return string;
}

reverseStringWithMethods(sentence);
