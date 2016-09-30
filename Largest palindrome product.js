function palindromeTest(value){
  var string = value.toString()
  var num = string.split("").reverse().join("")
  if( parseInt(num) === value){
    return true  
  }
  return false
}


function start(startNumber){
  var palindrome = 0;
  while(startNumber != 999){

    for(var i = startNumber; i <= 999; i++){
      var product = startNumber * i 
      if(palindromeTest(product) && product > palindrome){
        palindrome =  product
      }
    }
    startNumber++
  }
  return palindrome;
}
