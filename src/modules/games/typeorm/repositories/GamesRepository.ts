import { EntityRepository, Repository } from "typeorm";
import Games from "../entities/Games";

@EntityRepository(Games)
export default class GamesRepository extends Repository <Games>{
    public async findByName(name: string): Promise<Games| undefined>{
        const game = await this.findOne({
            where: {name}
        })
        return game
    }
    public async findById(id: string): Promise<Games| undefined>{
        const game = await this.findOne({
            where: {id}
        })
        return game
    }
}