// script.js
function convert() {
    var inputValue = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = document.getElementById('result');
  
    var conversionResult;
    if (fromUnit === 'kilometers' && toUnit === 'meters') {
      conversionResult = inputValue * 1000;
    } else if (fromUnit === 'kilometers' && toUnit === 'inches') {
      conversionResult = inputValue * 39370.1;
    } else if (fromUnit === 'kilometers' && toUnit === 'centimeters') {
      conversionResult = inputValue * 100000;
    } else if (fromUnit === 'kilometers' && toUnit === 'millimeters') {
      conversionResult = inputValue * 1e+6;
    } else if (fromUnit === 'meters' && toUnit === 'kilometers') {
      conversionResult = inputValue / 1000;
    } else if (fromUnit === 'meters' && toUnit === 'inches') {
      conversionResult = inputValue * 39.3701;
    } else if (fromUnit === 'meters' && toUnit === 'centimeters') {
      conversionResult = inputValue * 100;
    } else if (fromUnit === 'meters' && toUnit === 'millimeters') {
      conversionResult = inputValue * 1000;
    } else if (fromUnit === 'inches' && toUnit === 'kilometers') {
      conversionResult = inputValue * 0.0000254;
    } else if (fromUnit === 'inches' && toUnit === 'meters') {
      conversionResult = inputValue * 0.0254;
    } else if (fromUnit === 'inches' && toUnit === 'centimeters') {
      conversionResult = inputValue * 2.54;
    } else if (fromUnit === 'inches' && toUnit === 'millimeters') {
      conversionResult = inputValue * 25.4;
    } else if (fromUnit === 'centimeters' && toUnit === 'kilometers') {
      conversionResult = inputValue * 1e-5;
    } else if (fromUnit === 'centimeters' && toUnit === 'meters') {
      conversionResult = inputValue * 0.01;
    } else if (fromUnit === 'centimeters' && toUnit === 'inches') {
      conversionResult = inputValue * 0.393701;
    } else if (fromUnit === 'centimeters' && toUnit === 'millimeters') {
      conversionResult = inputValue * 10;
    } else if (fromUnit === 'millimeters' && toUnit === 'kilometers') {
      conversionResult = inputValue * 1e-6;
    } else if (fromUnit === 'millimeters' && toUnit === 'meters') {
      conversionResult = inputValue * 0.001;
    } else if (fromUnit === 'millimeters' && toUnit === 'inches') {
      conversionResult = inputValue * 0.0393701;
    } else if (fromUnit === 'millimeters' && toUnit === 'centimeters') {
      conversionResult = inputValue * 0.1;
    }
  
    if (conversionResult !== undefined) {
      result.innerHTML = `${inputValue} ${fromUnit} is equal to ${conversionResult.toFixed(2)} ${toUnit}.`;
    } else {
      result.innerHTML = 'Please select valid conversion units.';
    }
  }
  