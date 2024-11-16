const fs = require('fs')
const fileName ='estudiantes.json'

const estudiantes = [
    {nombre: 'Juan', edad:'18',carrera:'Ingenieria en Ds'},
    {nombre: 'Josefina', edad:'22',carrera:'Ingenieria Civil'},
    {nombre: 'Oscar', edad:'25',carrera:'Ingenieria en Ds'}
]

fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
    if(err){
        console.error('Error al crear el archivo JSOn',err);
        return;
    }
    console.log('El archivo JSON fue creado exitosamente')
})