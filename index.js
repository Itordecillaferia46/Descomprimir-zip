const fs = require('fs');
const unrar = require('unrar');
const AdmZip = require('adm-zip');

// const filePath = './archivo.rar'; // Reemplazar con la ruta del archivo ZIP a descomprimir
// const filePath = './Podcast01-main.zip';

//Ruta local de archivo que se va a descomprimir, necesita estár en la carpeta de origen deeste código
const filePath = './Prueba.zip';
//Admzip es un objeto de opciones que indica que el resultado debe ser devuelto en formato binario (base64: false) y que se debe comprobar la suma de comprobación CRC32 (checkCRC32: true).
const result = AdmZip(filePath, {base64: false, checkCRC32: true});


for (const file in result.files) {
  if (!result.files.hasOwnProperty(file)) continue;
  // elimina la extensión .zip del nombre del archivo
  const folderName = file.slice(0, -4); 
  //crea la carpeta utilizando el método fs.mkdirSync() de la biblioteca fs
  fs.mkdirSync(folderName);

  for (const file in result.files) {
    if (!result.files.hasOwnProperty(file)) continue;
    // const foldername elimina la extensión .zip del nombre del archivo origen
    const folderName = file.slice(0, -4); 
    const archivos_descomprimidos = `${folderName}/${file}`;
    fs.writeFileSync(archivos_descomprimidos, result.files[file]._data, 'binary');
  }
}

//creamos un condicional para validar el tipo de archivo y proceder extraer el .zip usando metodo zip.extractAllTo
if (filePath.endsWith('.zip')) {
  const zip = new AdmZip(filePath);
  zip.extractAllTo('./archivos_descomprimidos' );
  console.log('Archivo descomprimido');
} else {
  console.error('Formato de archivo no soportado');
}