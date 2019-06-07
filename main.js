var form = document.querySelector('form');
form.addEventListener('submit', value);


function value(e){
	e.preventDefault();
	let select = document.getElementById('operation').value;
	let first = document.getElementById('first').value;
	let second = document.getElementById('second').value;
	let all;
	switch(select){
		case 'multiply':
			all = first*second;
			break;
		case 'divide':
			all = first/second;
			break;	
		case 'plus':
			all = parseFloat(first)+parseFloat(second);

			break;	
		case 'minus':
			all = first-second;
			break;		
		default:
			break;					
	}
	var result = document.getElementById('result');
	result.innerHTML = '<br>Мәні: <b>'+all+'</b>';
}
console.log(Math.abs.apply('nan'));
