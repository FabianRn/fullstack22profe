import FileReader from "node:fs/promises";

console.log("proceso 1");
FileReader.readFile("Archivo/tareas.json", "utf8")
  .then((datos) => {
    console.log("proceso 2", datos);
  })
  .catch((err) => console.log("error al leer el archivo", err))
  .finally(() => console.log("fin de la promesa"));
console.log("fin del proceso");

//async await
try {
  const consultarTareas = await FileReader.readFile(
    "Archivos/tareas.json",
    "utf8",
  );
  console.log(consultarTareas);
} catch (error) {
  console.log("error al leer el archivo", error);
}
