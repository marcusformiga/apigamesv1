import Games from "../typeorm/entities/Games";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "../../../shared/errors/AppError";
import {getCustomRepository} from 'typeorm'

interface IRequest{
    name: string
    price: number
    year: number
}
export default class CreateGameService {
    public async execute({name, price, year}: IRequest): Promise<Games| undefined>{
        const gameRepository = getCustomRepository(GamesRepository)
        const gameExists = await gameRepository.findByName(name)
        if(gameExists){
            throw new AppError("Já existe um jogo com esse nome cadastrado", 400)
        }
        const newGame = gameRepository.create({name, price, year})
        await gameRepository.save(newGame)
        return newGame

    }
}