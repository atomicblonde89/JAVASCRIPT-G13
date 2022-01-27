/*
	0. Eventos
	1. Formulario Campos: Nombre, Apellidos y Edad
	2. Boton de enviar el formulario : evento submit
	3. Mostrar datos por Pantall
	4. Validar Formulario
*/

if(typeof window == 'object'){

	window.addEventListener('DOMContentLoaded',function(){

		console.log('EL DOM SE CARGO')

		const nav = document.querySelector('.navegacion');

		nav.addEventListener('mouseover',function(){
			console.log('Entrando a la navegacion');
			nav.style.background = 'red'
		})

		nav.addEventListener('mouseout',function(){
			console.log('Saliendo de la navegacion');
			nav.style.background = 'transparent'
		})
		
		const busqueda = document.querySelector('.busqueda');
		busqueda.addEventListener('input', leerInput);

		function leerInput(e){
			
			console.log('e trae toda la info del input', e)
			console.log('e.type que elemento es', e.type)
			console.log('e.target muetra el objeto input', e.target)
			console.log('e.target.value trae el dato que escribo en el input', e.target.value)
		}


		let formulario = document.querySelector('#formulario');
		let mensajeDatos = document.querySelector('#alerta');
		mensajeDatos.style.display= 'none';

		let error_nombre = document.querySelector('#error_nombre');
		let error_apellidos = document.querySelector('#error_apellidos');
		let error_edad = document.querySelector('#error_edad');

		error_nombre.style.display= 'none';
		error_apellidos.style.display= 'none';
		error_edad.style.display= 'none';

		formulario.addEventListener('submit',function(e){
			e.preventDefault()
			let nombre = document.querySelector('#nombre').value
			console.log('Evento de Submit del formulario')

			if(nombre.trim() == null ||  nombre.trim().length == 0){
				alert('El nombre no es valido');
				error_nombre.innerHTML = 'El nombre no es valido'
				error_nombre.style.display = 'block'
			}
	
		})

	







	})



}
