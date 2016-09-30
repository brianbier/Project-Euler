

function sumSquare(value){
  var squareRoot= 0;

    for(var i = 0; i <= value; i++){
      var square = i * i;
      squareRoot = squareRoot + square
    }
  return squareRoot;
}

function sum(value){
    var sum = 0
    var currentNum = 0
    for(var i = 0; i <= value; i++){
      currentNum = i
      sum =  sum + currentNum
    }
  var square = sum * sum
  return square - sumSquare(value)

}


