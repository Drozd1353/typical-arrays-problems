exports.min = function min (array) {
  if(array===undefined || array.length==0)
  {
  return 0;
  }
  function compare(a,b)
  {
    if(a>b) return 1;
    if(a==b)return 0;
    if(a<b)return -1;
  }
 array=array.sort(compare)
 return array[0];
}

exports.max = function max (array) {
  if(array===undefined || array.length==0)
  {
  return 0;
  }
  function compare(a,b)
  {
    if(a>b) return 1;
    if(a==b)return 0;
    if(a<b)return -1;
  }
 array=array.sort(compare)
 return array[array.length-1];
}

exports.avg = function avg (array) {
  if(array===undefined || array.length==0)
  {
  return 0;
  }
let result=array.reduce((sum,current) => sum+current,0)
return result/(array.length);
}
