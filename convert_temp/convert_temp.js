/*
 http://www.codewars.com/kata/54ce9497975ca65e1a0008c6

 var hash = {
 "C"  : 'Celsius',
 "F"  : 'Fahrenheit',
 "K"  : 'Kelvin',
 "R"  : 'Rankine',
 "De" : 'Delisle',
 "N"  : 'Newton',
 "Re" : 'Réaumur',
 "Ro" : 'Rømer'
 };*/

var fromCel = {
  "C"  : function(c){ return c; },
  "F"  : function(c){ return c * 9/5 + 32 },
  "K"  : function(c){ return c + 273.15 },
  "R"  : function(c){ return (c + 273.15) * 9/5 },
  "De" : function(c){ return (100 - c) * 3/2 },
  "N"  : function(c){ return c * 33/100 },
  "Re" : function(c){ return c * 4/5 },
  "Ro" : function(c){ return c * 21/40 + 7.5 }
};

var toCel = {
  "C"  : 'Celsius',
  "F"  : function(n){ return (n - 32) * 5/9 },
  "K"  : function(n){ return n - 273.15 },
  "R"  : function(n){ return (n - 491.67) * 5/9 },
  "De" : function(n){ return 100 - n * 2/3 },
  "N"  : function(n){ return n * 100/33 },
  "Re" : function(n){ return n * 5/4 },
  "Ro" : function(n){ return (n - 7.5) * 40/21}
};

var convertTemp = function(temp, from_scale, to_scale) {
  // if from_scale is 'C'
  if (from_scale === 'C'){
    return fromCel[to_scale](temp);
  }
  if (to_scale === 'C'){
    return toCel[from_scale](temp);
  }
  //convert to Celsius
  var func1 = toCel[from_scale];
  var inCels = func1(temp);

  //convert to to_scale
  return toCel[to_scale](inCels);
};

console.log(convertTemp(0, 'C', 'K'));
console.log(convertTemp(0, 'R', 'De'));




