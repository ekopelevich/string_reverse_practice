var str = 'apple';

function reverseString(string){
  var result = '';
  for (var i = string.length - 1; i >= 0 ; i--) {
    result = result + string[i];
  }
  console.log(result);
  return result;
}

reverseString(str);
