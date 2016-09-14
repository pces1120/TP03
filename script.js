//Trabajo práctico 3

// Mejorar la calculadora seprando en funciones cada operacione
// Debera poder ingresar 2 valores
// Debera poder ingresar que operacion quiere realizar
// Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
// Debera mostrar el resultado de la operacion en consola

function calculadoraMejorada(){

	var primerValor = parseFloat(prompt('Ingrese el primer numero'));
	var segundoValor = parseFloat(prompt('Ingrese el segundo numero'));
	var operacion = prompt('Ingrese la operacion que desea realizar (suma, resta, multiplicacion o division)');

	function suma(){
		var resultado = parseFloat(primerValor) + parseFloat(segundoValor);
		console.log(resultado);
	}

	function resta(){
		var resultado = parseFloat(primerValor) - parseFloat(segundoValor);
		console.log(resultado);
	}

	function multiplicacion(){
		var resultado = parseFloat(primerValor) * parseFloat(segundoValor);
		console.log(resultado);
	}

	function division(){
		var resultado = parseFloat(primerValor) / parseFloat(segundoValor);
		console.log(resultado);
	}

	if (operacion === 'suma'){

		suma();

	} else if (operacion === 'resta'){

		resta();

	} else if (operacion === 'multiplicacion'){

		multiplicacion();

	} else if (operacion === 'division') {

		division();
	}
}

calculadoraMejorada();