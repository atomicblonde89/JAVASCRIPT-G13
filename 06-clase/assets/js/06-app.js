/*
    Veremos como unir 2 arreglos, para ello existe un arreay method llamado .concat
*/

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']
const meses2 =['Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

const meses3 = meses.concat(meses2)
console.log(meses3)

//spread operator
const meses4 = [...meses,...meses2]
console.log('meses4', meses4)
