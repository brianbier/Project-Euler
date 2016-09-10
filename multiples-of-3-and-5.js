function calculate(num){
  var array = []
  for(var i = 0; i < num: i++){
    if(i % 3 === 0 && i % 5 === 0){
      array.push(i)
    }else if(i % 5 === 0){
      array.push(i)
    }else if(i % 3 === 0){
      array.push(i)
    }
  }
  var sum = array.reduce((a,b) => a+b,0)
  return sum
}