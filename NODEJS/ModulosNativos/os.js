const os = require("node:os");

console.log("memoria libre", os.freemem());
console.log("memoria total", os.totalmem());
console.log("version de node", process.version);
console.log("version de OS", os.version());
console.log("nombre del host", os.hostname());
console.log("arquitectura", os.arch());
console.log("plataforma", os.platform());
console.log("cpus", os.cpus());
console.log("directorio ", os.homedir());
