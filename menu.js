const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
    ==== Menú ====
    1. Crear archivo JSON con estudiantes
    2. Leer archivo JSON de estudiantes
    3. Agregar nuevo estudiante
    4. Actualizar información de estudiantes
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        manejarOpcion(opcion);
    });
};

const manejarOpcion = (opcion) => {
    let comando;
    switch (opcion) {
        case '1':
            comando = 'node create.js';
            break;
        case '2':
            comando = 'node read.js';
            break;
        case '3':
            comando = 'node add.js';
            break;
        case '4':
            comando = 'node update.js';
            break;
        case '5':
            comando = 'node delete.js';
            break;
        case '6':
            comando = 'node count.js';
            break;
        case '7':
            console.log('Saliendo del programa...');
            rl.close();
            return;
        default:
            console.log('Opción no válida. Intente nuevamente.');
            mostrarMenu();
            return;
    }
    exec(comando, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error al ejecutar la operación: ${err.message}`);
        }
        if (stderr) {
            console.error(`Error en el proceso: ${stderr}`);
        }
        console.log(stdout);
        mostrarMenu();
    });
};

mostrarMenu();
