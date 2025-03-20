const inputbox1 = document.getElementById('inputbox');
const inputbox2 = document.getElementById('inputbox2');
const selector1 = document.getElementById('selector1');
const selector2 = document.getElementById('selector2');

function convert() {
    if (inputbox1.value === '') {
        alert('Please input a temperature');
    } else {
        const temperature = parseFloat(inputbox1.value);
        if (isNaN(temperature)) {
            alert('Invalid input. Please enter a numeric value.');
            inputbox1.value = '';
        } else {
            let convertedTemperature;
            const unitFrom = selector1.value;
            const unitTo = selector2.value;

            // Basic conversion logic
            if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
                convertedTemperature = temperature + 273.15;
            } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
                convertedTemperature = temperature - 273.15;
            } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            } else {
                convertedTemperature = temperature; // Same unit conversion
            }

            inputbox2.value = convertedTemperature; // Set the converted value
        }
    }
}

function clearInputs() {
    inputbox1.value = '';
    inputbox2.value = '';
    selector1.selectedIndex = 0; // Reset to the first option
    selector2.selectedIndex = 0; // Reset to the first option
}
