
import express, { Application, Request, Response } from 'express'
const app: Application = express()
const fs = require("fs")
const path = require("path")
const filePath = path.join(__dirname, '../db/todo.json')

app.use(express.json())

const todosRouter = express.Router()

app.use("/todos", todosRouter)

todosRouter.get("/all-todos", (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, {encoding: "utf-8"})
    

    // console.log(data);
    res.json({
        message: 'from todos router',
        data
    })
})


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World with express js')
})

// app.get('/todos/:title/:body', (req: Request, res: Response) => {
app.get('/todos', (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, {encoding: "utf-8"})
    console.log(req.params);
    console.log(req.query);
    // console.log(data);
    res.json(data)
})

app.post('/todos/create-todo', (req: Request, res: Response) => {
    const data = req.body
    const {title, body}= req.body

    console.log(title, body);
    res.json('hello')
})



export default app;




/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */