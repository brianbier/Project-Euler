var array = []

function calculate(number){
  for(var i = 1; i <= number; i++){
    if(number == 1){
      return
    }else if(number % i === 0){
      array.push(i)
      number = number/i
    }
  }
  console.log(array.sort(function(a, b){return a-b}).reverse()[0])

}
