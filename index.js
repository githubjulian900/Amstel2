/** @format */

console.clear();

const Client = require("./src/Structures/Client");   

const config = require("./src/Data/config.json");

const client = new Client();

client.start(process.env.token);
