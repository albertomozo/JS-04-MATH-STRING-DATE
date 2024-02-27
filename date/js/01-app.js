titulo.innerHTML='01 Introdución';
buscador = document.querySelector('#info');
const diaHoy = new Date();
let valor;
valor = diaHoy;

console.log(valor);

// Las fechas se maneja con el objeto date.

document.getElementById('curso').innerHTML = '<h3>Ejemplos de métodos</h3>';
document.getElementById('curso').innerHTML +='const diaHoy = new Date();<br>let valor;<br>valor = diaHoy;';
document.getElementById('curso').innerHTML += `<p><strong>Date() = </strong>${valor}</p>`;
document.getElementById('curso').innerHTML += `<p><strong>valor.getDay() = </strong> ${valor.getDay()}</p>`;

console.log(valor.getDay())


