const fs = require('fs')
const fileName = 'estudiantes.json'

fs.readFile(fileName,'utf8',(err,data)=>{
    if(err){
        console.error('Error al leer el archivo JSON',err);
        return;
    }
    const estudiantes = JSON.parse(data);
    estudiantes[2].edad = 31;

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(error)=>{
        if(error){
            console.error('Error al escribir el archivo JSON:',error);
            return;
        }
        console.log('Archivo JSON actualizado exitosamente.')
    });
});