"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./app/todos/todos.routes");
const app = (0, express_1.default)();
const fs = require("fs");
const path = require("path");
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.todosRouter);
app.get("/", (req, res, next) => {
    console.log('i am middleware');
    next();
}, (req, res) => {
    res.send('Hello World with express js');
});
exports.default = app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */ 
