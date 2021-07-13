import { Router } from "express";
import GameController from "../controllers/GameController";

const gameRouter = Router()
const gameController = new GameController()

gameRouter.post("/", gameController.create)
gameRouter.get("/:id", gameController.show)
gameRouter.delete("/:id", gameController.remove)
gameRouter.get("/", gameController.list)

export default gameRouter