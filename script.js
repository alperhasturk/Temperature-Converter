const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

celsius.addEventListener("input", function () {
  const ftemp = (parseFloat(celsius.value) * 9) / 5 + 32;
  const ktemp = parseFloat(celsius.value) + 273.15;
  fahrenheit.value = ftemp.toFixed(2);
  kelvin.value = ktemp.toFixed(2);
});

fahrenheit.addEventListener("input", function () {
  const ctemp = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  const ktemp = ((parseFloat(fahrenheit.value) + 459.67) * 5) / 9;
  celsius.value = ctemp.toFixed(2);
  kelvin.value = ktemp.toFixed(2);
});
kelvin.addEventListener("input", function () {
  const ctemp = parseFloat(kelvin.value) - 273.15;
  const ftemp = ((parseFloat(kelvin.value) * 9) / 5 - 459.67).toFixed(2);
  celsius.value = ctemp.toFixed(2);
  fahrenheit.value = ftemp;
});
