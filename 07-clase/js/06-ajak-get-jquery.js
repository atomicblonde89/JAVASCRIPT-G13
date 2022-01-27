// Detecta que el DOM este cargado
$(function(){

/* 
   ===================================AJAK LOAD JQUERY====================================
	.load , prmite cargar datos dese una URL Externa, son peticiones asincronas,
	en terminos simples puedes pedir datos a un servidor sin refrescar tu página.

	Utilizaremos una API de prueba para realizar nuestras prueba :
	https://reqres.in
*/


$.ajax({
    // la URL para la petición
    url : 'https://pokeapi.co/api/v2/pokemon/20/',

    // especifica si será una petición POST o GET
    type : 'GET',

    // el tipo de información que se espera de respuesta
    dataType : 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(response) {

        //Asignamos una constante a la respuesta de la peticion
        const data = response
    
        const infoPoke = {
            
            imagen : data.sprites.other.dream_world['front_default'],
            especies : data.species['name']

        }

        const { imagen, especies } = infoPoke

        console.log('Info data--->', data )

        const imagenes = data.sprites

     
        
        $('.content').append(`

                <div class="card">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-uppercase">${especies}</h5>
                <hr>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item active">Movimientos</li>
                    <li class="list-group-item" id="dataInfo"></li>
                </ul>

                <div class="card-body py-4">
            
                </div>
            </div>
        `)

        const dataChart = data.stats;
        console.log('Data Chart--->',dataChart)

        const datos = []
        for (const index in dataChart){
            datos.push({

                y:dataChart[index].base_stat,
                indexLabel: dataChart[index].stat.name
                
            })

            console.log('Este es el Key-->', index, dataChart[index])
        }

        console.log('Datos--->',datos )

        const chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                text: `Estadisticas de poder para ${especies}`
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [
            {
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints: datos
            }
            ]
        });
        chart.render();
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },

    // código a ejecutar sin importar si la petición falló o no
    complete : function(xhr,status) {
        alert('Petición realizada');

        const lista = $('ul > li#dataInfo');
        const dataMoves = xhr.responseJSON.moves
        dataMoves.forEach((mov) => {
            lista.append(`<span class="tag">${mov.move.name}</span>`)
            console.log(mov.move.name)
        })

    }
});




	


});