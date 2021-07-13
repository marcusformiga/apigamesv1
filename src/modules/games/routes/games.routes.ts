import { Router } from "express";
import GameController from "../controllers/GameController";

const gameRouter = Router()
const gameController = new GameController()

gameRouter.post("/", gameController.create)
gameRouter.get("/:id", gameController.show)

export default gameRouter