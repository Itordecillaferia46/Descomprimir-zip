const AdmZip = require('adm-zip');
const Unrar = require('node-unrar');
const fs = require('fs');

// Ruta de archivo .zip
const zipFilePath = 'Podcast01-main.zip';

// Ruta de archivo .rar
const rarFilePath = 'rar.rar';

// Descomprime todos los archivos del .zip en la carpeta correspondiente
const zip = new AdmZip(zipFilePath);
zip.extractAllTo('./extracted', true);

// Crea un nuevo objeto Unrar para el archivo RAR
const rar = new Unrar(rarFilePath);

// Descomprime todos los archivos del RAR en el directorio especificado
rar.extract('./extracted', null, (err) => {
  if (err) {
    console.error('Error al descomprimir el archivo .rar', err);
  } else {
    console.log('Archivos descomprimidos con éxito');
  }
});

