let input = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let input3 = document.querySelector('.input-3');
let inputs = document.querySelectorAll('.input');
for (var i = 0; i < inputs.length; i++) {
	inputs[i].value;
}
let input4 = document.querySelector('.input-4');
let rangeValue = document.querySelector('.input-4_value')
let output4 = document.querySelector('.output-4');
let button = document.querySelector('.main-button');
let requireTextOutput = document.querySelector('.require-text-output');
	input4.addEventListener('input', function() {
		rangeValue.innerHTML = input4.value;
	});
button.onclick = function () {
	let model = input.value;
	let brand = input2.value;
	let country = input3.value;
	let check = 5;
	for (var i = 0; i < inputs.length; i++) {
	if (/[0-9!@#№$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/.test(inputs[i].value)) {
		 check = 0;
	}
		else if (inputs[i].value.length == '') {
		check = 1;
	}
		else {
		 modelOutput ='Марка - ' + model + '. ';
		 brandOutput ='Модель - ' + brand + '. ';
		 countryOutput ='Страна - ' + country + '. ';
	}
}
	let output4_value = input4.value;
	let age = input4.value;
	if (output4_value >= 18) {
		ageOutput = 'Год выпуска - '+ age + '.';
	}
		else {
		ageOutput = 'Год выпуска - '+ age + '.';
	}
	let outputText;
	for (var i = 0; i < inputs.length; i++) {
		if (check === 0) {
			let outputText = 'Заполните все данные(недопустимые символы)';
			requireTextOutput.innerHTML = outputText;
			document.querySelector('.text-output__item-1').innerHTML = "";
			document.querySelector('.text-output__item-2').innerHTML = "";
			document.querySelector('.text-output__item-3').innerHTML = "";
			document.querySelector('.text-output__item-4').innerHTML = "";
			inputs[i].classList.add('input_require');
			inputs[i].classList.remove('input_correct');
		}
			else if (check === 1) {
			let outputText = 'Заполните все данные';
			requireTextOutput.innerHTML = outputText;
			document.querySelector('.text-output__item-1').innerHTML = "";
			document.querySelector('.text-output__item-2').innerHTML = "";
			document.querySelector('.text-output__item-3').innerHTML = "";
			document.querySelector('.text-output__item-4').innerHTML = "";
			inputs[i].classList.add('input_require');
			inputs[i].classList.remove('input_correct');
		}
		else{
			requireTextOutput.innerHTML = "";
			inputs[i].classList.remove('input_require');
			inputs[i].classList.add('input_correct');
			inputs[i].value ="";
			input4.value ="2000";
			rangeValue.innerHTML = input4.value;
			// let outputText = nameOutput + nameOutput + countryOutput + ageOutput;
			document.querySelector('.text-output__item-1').innerHTML = modelOutput;
			document.querySelector('.text-output__item-2').innerHTML = brandOutput;
			document.querySelector('.text-output__item-3').innerHTML = countryOutput;
			document.querySelector('.text-output__item-4').innerHTML = ageOutput;
		}
}
};
