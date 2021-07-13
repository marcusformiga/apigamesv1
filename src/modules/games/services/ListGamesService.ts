import Games from "../typeorm/entities/Games";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "../../../shared/errors/AppError";
import {getCustomRepository} from 'typeorm'

export default class ListGamesService{
    public async execute(): Promise<Games[]| undefined>{
        const gamesRepository = getCustomRepository(GamesRepository)
        const games = await gamesRepository.find()
        return games
    }
}