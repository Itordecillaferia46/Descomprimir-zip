const fs = require('fs');
const AdmZip = require('adm-zip');
const crypto = require('crypto');

//Ruta local de archivo que se va a descomprimir, necesita estár en la carpeta de origen deeste código
//const file = './Prueba.zip';
const file = './Podcast01-main.zip'

// elimina la extensión .zip del nombre del archivo
var folderName = file.slice(0, -4);
folderName += crypto.randomUUID();
console.log(folderName)
    //crea la carpeta utilizando el método fs.mkdirSync() de la biblioteca fs
fs.mkdirSync(`./H5P/${folderName}`);

//creamos un condicional para validar el tipo de archivo y proceder extraer el .zip usando metodo zip.extractAllTo
if (file.endsWith('.zip')) {
    const zip = new AdmZip(file);
    zip.extractAllTo(`./H5P/${folderName}`);
    console.log('Archivo descomprimido');
} else {
    console.error('Formato de archivo no soportado');
}