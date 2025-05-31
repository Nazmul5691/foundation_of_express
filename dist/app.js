"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, '../db/todo.json');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World with express js');
});
app.get('/todos', (req, res) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json();
});
app.post('/todos/create-todo', (req, res) => {
    const data = req.body;
    const { title, body } = req.body;
    console.log(title, body);
    res.json('hello');
});
exports.default = app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */ 
