import express, { Application, NextFunction, Request, Response } from 'express'
import { todosRouter } from './app/todos/todos.routes'
const app: Application = express()
const fs = require("fs")
const path = require("path")

app.use(express.json())

app.use("/todos", todosRouter)


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log('i am middleware');
    next()
},
 (req: Request, res: Response) => {
    res.send('Hello World with express js')
})








export default app;




/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */