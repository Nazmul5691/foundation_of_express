"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, '../../db/todo.json');
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data);
    res.json({
        message: 'from todos router',
        data
    });
});
exports.todosRouter.post('/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json('hello');
});
exports.todosRouter.get("/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json('hello');
});
exports.todosRouter.put("/update-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json('hello');
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json('hello');
});
