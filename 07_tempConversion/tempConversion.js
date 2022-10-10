const ftoc = function(tempFahrenheit) {
  convertedTemp = (tempFahrenheit - 32) * (5/9);
  return convertedTemp;
};

const ctof = function(tempCelsius) {
  convertedTemp = tempCelsius * (9/5) + 32;
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
