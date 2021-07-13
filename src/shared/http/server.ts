import 'reflect-metadata'
import 'express-async-errors'
import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import '../database/connection'
import AppError from '../errors/AppError'
import router from './routes/index'
const server = express()
const port = 3001

server.use(express.json())
server.use(router)
server.use(cors())

server.get("/test", (request, response) =>{
    return response.send("Rota de teste")
})

server.use((error: Error, request: Request, response: Response, next: NextFunction) =>{
    if(error instanceof AppError){
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message
      })
    }
    console.log(error)
    return response.status(500).json({
      status: "error",
      message: "Erro interno do servidor"
    })
    
  })
server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})
