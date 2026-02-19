import FileReader from "node:fs";

console.log("proceso 1");
FileReader.readFile("Archivos/tareas.json", "utf8", (err, datos) => {
  console.log("proceso2=", datos);
  if (err) {
    console.log(err);
    return;
  }
});
console.log("fin del proceso");
