"using strict";

function add(a){
  var all = 0

  for (i in a){ all += a[i]}
  return all
}

var list= [3, 9, 7, 5, 10, 8]
console.log(add(list));
