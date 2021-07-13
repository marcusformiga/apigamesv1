import Games from "../typeorm/entities/Games";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "../../../shared/errors/AppError";
import {getCustomRepository} from 'typeorm'

export default class ListGameService {
    public async execute(id: string): Promise<Games| undefined>{
        const gamesRepository = getCustomRepository(GamesRepository)
        const gameExists = await gamesRepository.findById(id)
        if(!gameExists){
            throw new AppError(`Não existe nenhum jogo com id ${id} informado`, 404)
        }
        return gameExists
    }
}