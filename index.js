const Server = require("./src/server");
const router = require("./src/routers/index");

server = new Server(router());

server.start();