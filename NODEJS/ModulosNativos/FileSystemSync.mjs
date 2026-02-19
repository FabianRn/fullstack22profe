import FileReader from "node:fs";

console.log("proceso 1");
const tareasArchivo = FileReader.readFileSync("Archivos/tareas.json", "utf-8");

const tareasObjeto = JSON.parse(tareasArchivo);

console.log("proceso 2");
console.log(tareasArchivo.toString()[0]);
console.log(tareasObjeto[0].title);

console.log("fin del proceso");
