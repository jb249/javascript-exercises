function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(tempFahrenheit) {
  convertedTemp = (tempFahrenheit - 32) * (5/9);
  return round(convertedTemp, 1);
};

const ctof = function(tempCelsius) {
  convertedTemp = tempCelsius * (9/5) + 32;
  return round(convertedTemp, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
