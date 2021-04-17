let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let input3 = document.querySelector('.input-3');
let textInputs = document.querySelectorAll('.text-input');
let inputs = document.querySelectorAll('.input');
for (var i = 0; i < textInputs.length; i++) {
	textInputs[i].value;
}
	let output_1 = document.querySelector('.text-output__item-1');
	let output_2 = document.querySelector('.text-output__item-2');
	let output_3 = document.querySelector('.text-output__item-3');
	let output_4 = document.querySelector('.text-output__item-4');
	let output_items = document.querySelectorAll('.text-output__items');
let input4 = document.querySelector('.input-4');
let rangeValue = document.querySelector('.input-4_value');
let checkButton = document.querySelector('.check-button');
let sendButton = document.querySelector('.send-button');
let resetButton = document.querySelector('.reset-button');
let requireTextOutput = document.querySelector('.require-text-output');
	input4.addEventListener('input', function() {
		rangeValue.innerHTML = input4.value;
	});
function checkValue() {
	let invlSmbls = /[0-9!@#№$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/;
	let vlSmbls = /[a-z а-я]/;
	let check = 1;
	for(i = 0; i < textInputs.length; i++){
	if (invlSmbls.test( textInputs[i].value)) {
		 check = -1;
	}
		else if (!vlSmbls.test( textInputs[i].value)) {
		check = 0;
	}
}
	let output4_value = input4.value;
	let outputText;
		if (check === -1) {
			let outputText = 'недопустимые символы';
			requireTextOutput.innerHTML = outputText;
			output_items.forEach( items => {
				items.innerHTML = "";
			}
			)
			textInputs.forEach( items => {
				items.classList.add('input_require');
				items.classList.remove('input_correct');
			}
		);
		}
			else if (check === 0) {
			let outputText = 'Заполните все данные';
			requireTextOutput.innerHTML = outputText;
			output_items.forEach(item => {
				item.innerHTML = "";
				}
			);
			textInputs.forEach( items => {
				items.classList.add('input_require');
				items.classList.remove('input_correct');
			}
		);
		}
		else if(check === 1){
			sendButton.style="display:block;";
			checkButton.style="display:none;";
			outputText = 'Данные введены верно';
			requireTextOutput.innerHTML = outputText;
			textInputs.forEach( items => {
				items.classList.remove('input_require');
				items.classList.add('input_correct');
			}
		);
			output_items.forEach(item => {
				item.innerHTML = "";
				}
			);
		}
					for ( var i = 0; i < inputs.length; i++ ) {
	inputs[i].addEventListener( 'change', function() {
			sendButton.style="display:none;";
			checkButton.style="display:block;";
					outputText = '';
		requireTextOutput.innerHTML = outputText;
	});
}
};
checkButton.onclick = checkValue;
		sendButton.onclick = function sendValue() {
			sendButton.style="display:none;";
			checkButton.style="display:block;";
			textInputs.forEach( items => {
				items.classList.remove('input_require');
				items.classList.remove('input_correct');
			}
		);
		outputText = '';
		requireTextOutput.innerHTML = outputText;
		let brand = input1.value;
		let model = input2.value;
		let country = input3.value;
		let age = input4.value;
		let info = [
		brandOutput = 'Марка - ' + brand + '. ',
		modelOutput = 'Модель - ' + model + '. ',
		countryOutput = 'Страна - ' + country + '. ',
		ageOutput = 'Год выпуска - '+ age + '.',
		]
		output_1.innerHTML = info[0];
		output_2.innerHTML = info[1];
		output_3.innerHTML = info[2];
		output_4.innerHTML = info[3];
		input4.value ="2000";
		rangeValue.innerHTML = input4.value;
}
		resetButton.onclick = function() {
			textInputs.forEach( items => {
				items.classList.remove('input_require');
				items.classList.remove('input_correct');
			}
		);
			textInputs.forEach( items => {
				items.value = "";
			}
			);
		output_1.innerHTML = 'Марка -';
		output_2.innerHTML = 'Модель -';
		output_3.innerHTML = 'Страна -';
		output_4.innerHTML = 'Год выпуска -';
			input4.value ="2000";
			rangeValue.innerHTML = input4.value;
					outputText = '';
		requireTextOutput.innerHTML = outputText;
		}
