import {Request, Response} from 'express'
import CreateGameService from '../services/CreateGameService'
import ListGameService from '../services/ListGameService'
import RemoveGameService from '../services/RemoveGameService'
import ListGamesService from '../services/ListGamesService'

export default class GameController{
    public async create(request: Request, response: Response) : Promise<Response>{
        const {name, price, year} = request.body
        const createGame = new CreateGameService()
        const newGame = await createGame.execute({name, price, year})
        return response.json(newGame).status(201) 
    }
    public async show(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const listGame = new ListGameService()
        const game = await listGame.execute(id)
        return response.json(game).status(200)
    }
    public async remove(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const removeGame = new RemoveGameService()
        const game = await removeGame.execute(id)
        return response.status(200).json([])
    }
    public async list(request: Request, response: Response): Promise<Response>{
        const listGames = new ListGamesService()
        const games = await listGames.execute()
        return response.status(200).json([games])
    }
}
