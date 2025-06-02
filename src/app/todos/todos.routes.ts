import express, { Request, Response } from "express";
const path = require("path")
const fs = require("fs")
const filePath = path.join(__dirname, '../../db/todo.json')

export const todosRouter = express.Router()


todosRouter.get("/", (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, {encoding: "utf-8"})
    
    // console.log(data);
    res.json({
        message: 'from todos router',
        data
    })
})


todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const {title, body}= req.body
    console.log(title, body);
    res.json('hello')
})

todosRouter.get("/:title",(req: Request, res: Response) => {
    const {title, body}= req.body
    console.log(title, body);
    res.json('hello')
})

todosRouter.put("/update-todo/:title",(req: Request, res: Response) => {
    const {title, body}= req.body
    console.log(title, body);
    res.json('hello')
})

todosRouter.delete("/delete-todo/:title",(req: Request, res: Response) => {
    const {title, body}= req.body
    console.log(title, body);
    res.json('hello')
})