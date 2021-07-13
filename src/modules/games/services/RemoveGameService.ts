import Games from "../typeorm/entities/Games";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "../../../shared/errors/AppError";
import {getCustomRepository} from 'typeorm'

export default class RemoveGameService{
    public async execute(id: string): Promise<void>{
        const gamesRepository = getCustomRepository(GamesRepository)
        const gameExists = await gamesRepository.findById(id)
        if(!gameExists){
            throw new AppError(`Jogo com id ${id} informado não foi encontrado, portanto não pode ser removido`, 404)
        }
        await gamesRepository.remove(gameExists)

    }
}