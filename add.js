const fs = require('fs');
const fileName ='estudiantes.json'

fs.readFile(fileName,'utf8',(err,data)=>{
    if(err){
        console.error('Error al leer el archivo.JSON',err);
        return;
    }

    const estudiantes = JSON.parse(data)
    const nuevoEstudiante={nombre:'Carlos',edad:18,carrera:'Ingenieria Industrial'}
    estudiantes.push(nuevoEstudiante);

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
        if(err){
            console.error('Error al escribir en el archivo JSON:',err);
            return;
        }
        console.log('Nuevo estudinte agregado al archivo JSON.');
    });
});